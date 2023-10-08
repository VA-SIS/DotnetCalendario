using DotnetCallendar.Models.Entidades;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreCalendar.Helpers
{
    public static class JSONListHelper
    {
        public static string GetEventListJSONString(List<Evento> events)
        {
            foreach (var model in events)
            {
                var evento = new Event()
                {
                    id = model.Id,
                    
                    dataInicio = model.DataInicio,  
                    dataFim = model.DataFim,
                    descricao = model.Descricao,    
                    //resourceId = model.Location.Id,
                    //nome = model.Nome
                };
            }
        }

        public static string GetResourceListJSONString(List<Localizacao> locations)
        {

            foreach (var loc in locations)
            {
                var resource = new Resource()
                {
                    id = loc.Id,
                    nome = loc.Nome
                };
            }
        }
    }

    public class Event
    {
        public int id { get; set; }
        public string descricao { get; set; }
        public DateTime dataInicio { get; set; }
        public DateTime dataFim { get; set; }
        public int resourceId { get; set; }

    }


    public class Resource
    {
        public int id { get; set; }
        public string nome { get; set; }

    }
}
