using DotnetCallendar.Models;
using DotnetCallendar.Models.Entidades;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DotnetCallendar.Data;

public class ApplicationDbContext : IdentityDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
    public DbSet<Localizacao> Locais { get; set;  }
    public DbSet<Evento> Eventos { get; set; }
}