using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Entities
{
    public class PanelOrder
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public List<PanelOrderPanel> OrderPanels { get; set; } = new List<PanelOrderPanel>();
        public Session Session { get; set; }
    }
}
