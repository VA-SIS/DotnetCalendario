using Microsoft.CodeAnalysis;
using System.ComponentModel.DataAnnotations;

namespace DotnetCallendar.Models.Entidades;

public class Evento
{
    [Key]
    public int Id { get; set; }
    [Display(Name = "Nome:")]
    public string Nome { get; set; }
    [Display(Name = "Descrição:")]
    public string Descricao { get; set; }
    [Display(Name = "Data inicial:")]
    public DateTime DataInicio { get; set; }
    [Display(Name = "Data de termino:")]
    public DateTime DataFim { get; set; }
    [Display(Name = "Cor:")]
    public string Cor { get; set; } = "#FFD700";

    //Relational data
    //public virtual Location Location { get; set; }
    //public virtual ApplicationUser User { get; set; }

}
