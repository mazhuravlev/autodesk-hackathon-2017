using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Dto;
using server.Entities;
using server.Services;

namespace server.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/panels")]
    public class PanelController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly SignalService _signalService;

        public PanelController(ApplicationDbContext db, SignalService signalService)
        {
            _db = db;
            _signalService = signalService;
        }

        [HttpGet("")]
        public IActionResult GetPanels([FromQuery] string sessionId)
        {
            if (sessionId == null || sessionId == "undefined" || sessionId == "null") return Ok(null);
            var session = _db.Sessions.Include(x => x.Panels).FirstOrDefault(x => x.Id == Guid.Parse(sessionId));
            if (session == null) return Ok(null);
            return Ok(session.Panels.Select(Mapper.Map<PanelDto>));
        }

        [HttpGet("orders")]
        public List<PanelOrderDto> GetPanelOrders([FromQuery] string sessionId)
        {
            var session = _db.Sessions.First(x => x.Id == Guid.Parse(sessionId));
            var panelOrdersDto = _db.PanelOrders.Where(x => x.Session == session).Include(x => x.OrderPanels)
                .ThenInclude(x => x.Panel).ProjectTo<PanelOrderDto>().ToList();

            return panelOrdersDto.Where(x => x.Panels.All(p => !p.IsShipped)).ToList();
        }

        [HttpPost("")]
        public IActionResult AddPanels([FromBody] List<PanelDto> panelDtos, [FromQuery] string sessionId)
        {
            var session = _db.Sessions.First(x => x.Id == Guid.Parse(sessionId));
            foreach (var panelDto in panelDtos)
            {
                var panel = new Panel {ForgeId = panelDto.ForgeId, Name = panelDto.Name, Type = panelDto.Type};
                _db.Panels.Add(panel);
            }
            _db.SaveChanges();
            return Ok();
        }

        [HttpPost("order")]
        public IActionResult AddPanelOrder([FromBody] PanelOrderDtoInbound panelOrderDto, [FromQuery] string sessionId)
        {
            var session = _db.Sessions.First(x => x.Id == Guid.Parse(sessionId));
            var orderPanels = panelOrderDto.PanelsForgeIds
                .Select(x => new PanelOrderPanel
                {
                    Panel = _db.Panels.Where(y => y.Session == session).First(p => p.ForgeId == x)
                }).ToList();
            _db.PanelOrderPanels.AddRange(orderPanels);
            var panelOrder = new PanelOrder {OrderPanels = orderPanels, Session = session};
            _db.PanelOrders.Add(panelOrder);
            _db.SaveChanges();
            _signalService.OrderCreated();
            return Ok(Mapper.Map<PanelOrderDto>(panelOrder));
        }

        [HttpPost("orders/ship")]
        public IActionResult ShipOrder([FromBody] PanelOrderDto panelOrderDto, [FromQuery] string sessionId)
        {
            var session = _db.Sessions.First(x => x.Id == Guid.Parse(sessionId));
            var order = _db.PanelOrders.Where(x => x.Session == session).Include(x => x.OrderPanels)
                .ThenInclude(x => x.Panel).First(x => x.Id == panelOrderDto.Id);
            var panels = order.OrderPanels.SelectMany(x => new List<Panel> {x.Panel}).ToList();
            foreach (var panel in panels)
            {
                panel.IsShipped = true;
            }
            _db.SaveChanges();
            _signalService.OrderShipped();
            return Ok(null);
        }

        [HttpPost("orders/mount")]
        public IActionResult MountPanel([FromBody] PanelDto panelDto, [FromQuery] string sessionId)
        {
            var session = _db.Sessions.First(x => x.Id == Guid.Parse(sessionId));
            var panel = _db.Panels.Where(x => x.Session == session).First(x => x.ForgeId == panelDto.ForgeId);
            panel.IsMounted = true;
            _db.SaveChanges();
            var result = Mapper.Map<PanelDto>(panel);
            _signalService.PanelMounted(result);
            return Ok(null);
        }
    }
}