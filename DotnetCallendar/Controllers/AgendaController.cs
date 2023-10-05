using Microsoft.AspNetCore.Mvc;

namespace DotnetCallendar.Controllers
{
    public class AgendaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
