using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DotnetCallendar.Controllers
{
    public class AgendaController : Controller
    {
        public IActionResult Index()
        {
            //var userid = User.FindFirstValue(ClaimTypes.NameIdentifier);
            //ViewData["Resources"] = JSONListHelper.GetResourceListJSONString(_idal.GetLocations());
            //ViewData["Events"] = JSONListHelper.GetEventListJSONString(_idal.GetMyEvents(userid));

            return View();
        }
    }
}
