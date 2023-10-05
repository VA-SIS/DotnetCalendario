using Microsoft.AspNetCore.Mvc;

namespace DotnetCallendar.Controllers
{
    public class EventosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
