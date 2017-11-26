using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dto
{
    public class PanelOrderDtoInbound
    {
        public List<int> PanelsForgeIds { get; set; } = new List<int>();
    }
}
