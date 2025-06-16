using System.ComponentModel.DataAnnotations;

namespace AssessmentApp.Models;

public class Destination
{
    [Key]
    [Required]
    public int Id { get; set; }
    
    [Required(ErrorMessage = "O nome é obrigatório")]
    [StringLength(100, MinimumLength = 3, ErrorMessage = "Mínimo 3 caracteres")]
    public string Name { get; set; }
    
    [Required(ErrorMessage = "O nome do país é obrigatório")]
    [StringLength(100, MinimumLength = 3, ErrorMessage = "Mínimo 3 caracteres")]
    public string CountryName { get; set; }
    
    public Destination() {  }
    
    public Destination(int id, string name, string countryName)
    {
        Id = id;
        Name = name;
        CountryName = countryName;
    }
}