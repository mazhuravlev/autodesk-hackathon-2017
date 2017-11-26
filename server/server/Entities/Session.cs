using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Entities
{
    public class Session
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public List<Panel> Panels { get; set; } = new List<Panel>();
    }
}
