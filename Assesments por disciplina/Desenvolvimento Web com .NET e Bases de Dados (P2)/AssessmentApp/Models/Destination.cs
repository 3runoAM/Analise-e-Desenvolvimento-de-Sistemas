using System.ComponentModel.DataAnnotations;

namespace AssessmentApp.Models;

public class Destination
{
    [Key]
    [Required]
    public int Id { get; set; }
    
    [Required]
    [StringLength(100, ErrorMessage = "Máximo de 100 caracteres")]
    public string Name { get; set; }
    
    [Required]
    [StringLength(100, ErrorMessage = "Máximo de 100 caracteres")]
    public string CountryName { get; set; }
    
    public bool IsActive { get; set; } = true;
    
    public Destination() {  }
    
    public Destination(int id, string name, string countryName)
    {
        Id = id;
        Name = name;
        CountryName = countryName;
    }
}