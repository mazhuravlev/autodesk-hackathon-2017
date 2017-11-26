using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dto
{
    public class PanelOrderDto
    {
        public Guid Id;
        public List<PanelDto> Panels { get; set; } = new List<PanelDto>();
    }
}
