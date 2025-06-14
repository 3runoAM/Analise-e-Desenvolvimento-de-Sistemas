using System.ComponentModel.DataAnnotations;

namespace AssessmentApp.Models;

public class Client{ 
    [Required]
    public int Id { get; set; }
    
    [Required]
    public string Name { get; set; }
    
    [Required]
    public string Email { get; set; }
    
    public List<Reservation> Reservations { get; set; }
}
