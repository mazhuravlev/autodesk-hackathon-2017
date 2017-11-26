using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Entities
{
    public class Panel
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public int ForgeId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public bool IsMounted { get; set; }
        public bool IsShipped { get; set; }
        public Session Session { get; set; }
    }
}
