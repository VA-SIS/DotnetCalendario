using System.ComponentModel.DataAnnotations;

namespace DotnetCallendar.Models.Entidades;

public class Evento
{
    [Key]
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public DateTime DataInicio { get; set; }
    public DateTime DataFim { get; set; }
}
