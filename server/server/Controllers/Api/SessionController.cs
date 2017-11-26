using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestSharp.Portable;
using RestSharp.Portable.HttpClient;
using server.Data;
using server.Dto;
using server.Entities;

namespace server.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/user")]
    public class IndexController : Controller
    {
        private readonly ApplicationDbContext _db;

        public IndexController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpPost("session")]
        public IActionResult Session([FromBody] List<PanelDto> panelDtos)
        {
            if (panelDtos == null || !panelDtos.Any()) return BadRequest("Нужно передать панели");
            var session = new Session();
            var panels = panelDtos.Select(pd => new Panel {ForgeId = pd.ForgeId, Name = pd.Name, Type = pd.Type, Session = session})
                .ToList();
            session.Panels.AddRange(panels);
            _db.Panels.AddRange(panels);
            _db.Sessions.Add(session);
            _db.SaveChanges();
            return Ok(Mapper.Map<SessionDto>(session));
        }

        [HttpGet("token")]
        public async Task<IActionResult> Token()
        {
            using (var client = new RestClient(new Uri("https://developer.api.autodesk.com/authentication/v1/authenticate")))
            {
                const string clientId = _CLIENT_ID_;
                const string clienSecret = _CLIENT_SECRET_;
                var request = new RestRequest("", Method.POST) { };
                request.AddParameter("client_id", clientId);
                request.AddParameter("client_secret", clienSecret);
                request.AddParameter("grant_type", "client_credentials");
                request.AddParameter("scope", "data:read");
                request.AddHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
                try
                {
                    var result = await client.Execute<TokenResponse>(request);
                    return Ok(result.Data);
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
                
            }
        }

        public class TokenResponse
        {
            public string access_token;
        }
    }
}