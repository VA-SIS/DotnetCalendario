using DotnetCallendar.Models.Entidades;

namespace DotnetCallendar.Helpers;

public static class JSONListHelper
{
    public static string GetEventListJSONString(List<Evento> events)
    {
        var eventlist = new List<Event>();
        foreach (var model in events)
        {
            var evento = new Event()
            {
                id = model.Id,
                inicio = model.DataInicio,
                fim = model.DataFim,
                atividade = model.Descricao,
                descricao = model.Nome
                                
            };
            eventlist.Add(evento);
        }
        return System.Text.Json.JsonSerializer.Serialize(eventlist);
    }

    public static string GetResourceListJSONString(List<Localizacao> locations)
    {
        var resourcelist = new List<Resource>();

        foreach (var loc in locations)
        {
            var resource = new Resource()
            {
                id = loc.Id,
                nome = loc.Nome
            };
            resourcelist.Add(resource);
        }
        return System.Text.Json.JsonSerializer.Serialize(resourcelist);
    }
}

public class Event
{
    public int id { get; set; }
    public string atividade { get; set; }
    public DateTime inicio { get; set; }
    public DateTime fim { get; set; }
    public int resourceId { get; set; }
    public string descricao { get; set; }
}

public class Resource
{
    public int id { get; set; }
    public string nome { get; set; }

}