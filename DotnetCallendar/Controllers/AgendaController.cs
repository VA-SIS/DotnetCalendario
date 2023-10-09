using DotnetCallendar.Data;
using DotNetCoreCalendar.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace DotnetCallendar.Controllers;

public class AgendaController : Controller
{

    private readonly ApplicationDbContext _context;

    public AgendaController(ApplicationDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {

        //var localizacao=_context.Locais.ToList();
        //var eventos=_context.Eventos.ToList();  

        //ViewData["Resources"] = JSONListHelper.GetResourceListJSONString(localizacao);
        //ViewData["Events"] = JSONListHelper.GetEventListJSONString(eventos);

        return View();
    }
}
