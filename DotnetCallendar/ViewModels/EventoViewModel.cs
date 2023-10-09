namespace DotnetCallendar.ViewModels;

public class EventoViewModel
{
    public int id { get; set; }
    public string title { get; set; }
    public string color { get; set; }
    public DateTime start { get; set; }
    public DateTime end { get; set; }
    public bool allday { get; set; }

    //public int pessoaId { get; set; }

}



