using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Entities
{
    public class PanelOrderPanel
    {
        public Guid Id { get; set; }
        public Panel Panel { get; set; }
        public PanelOrder PanelOrder { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
