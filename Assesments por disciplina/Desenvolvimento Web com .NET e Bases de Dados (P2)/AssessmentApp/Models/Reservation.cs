using System.ComponentModel.DataAnnotations;

namespace AssessmentApp.Models;

public class Reservation{
    [Required]
    public int Id { get; set; }
    
    [Required]
    public int ClientId { get; set; }
    
    [Required]
    public Client Client { get; set; }
    
    [Required]
    public int TravelPackageId { get; set; }
    
    [Required]
    public TravelPackage TravelPackage { get; set; }
    
    [Required]
    public DateTime DataReserva { get; set; }
}