using System.ComponentModel.DataAnnotations;

namespace AssessmentApp.Models;

public class TravelPackage {
    
    [Required]
    public int Id { get; set; }
    
    [Required]
    [StringLength(100, ErrorMessage = "Máximo de 100 caracteres")]
    public string Title { get; set; }
    
    [Required]
    public DateTime StartDate { get; set; }
    
    [Required]
    public int Capacity { get; set; }
    
    [Required]
    public decimal Price { get; set; }
    
    [Required]
    public List<Destination> Destinations { get; set; }
}