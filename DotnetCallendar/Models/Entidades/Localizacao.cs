using System.ComponentModel.DataAnnotations;

namespace DotnetCallendar.Models.Entidades;

public class Localizacao
{
    [Key]
    public int Id { get; set; }
    public string Nome { get; set; }
}
