using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server.Entities;
using server.Models;

namespace server.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Panel> Panels { get; set; }
        public DbSet<PanelOrder> PanelOrders { get; set; }
        public DbSet<PanelOrderPanel> PanelOrderPanels { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }
    }
}
