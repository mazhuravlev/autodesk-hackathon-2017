using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using server.Dto;
using server.Hubs;

namespace server.Services
{
    public class SignalService
    {
        private readonly IHubContext<SignalHub> _hub;

        public SignalService(IHubContext<SignalHub> hub)
        {
            _hub = hub;
        }

        public void OrderCreated()
        {
            _hub.Clients.All.InvokeAsync("OrderCreated");
        }

        public void OrderShipped()
        {
            _hub.Clients.All.InvokeAsync("OrderShipped");
        }

        public void PanelMounted(PanelDto panel)
        {
            _hub.Clients.All.InvokeAsync("PanelMounted", panel);
        }
    }
}
