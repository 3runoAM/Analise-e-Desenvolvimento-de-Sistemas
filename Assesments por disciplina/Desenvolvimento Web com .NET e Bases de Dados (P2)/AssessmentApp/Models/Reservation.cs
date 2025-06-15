using System.ComponentModel.DataAnnotations;

namespace AssessmentApp.Models;

public class Reservation
{
    [Key]
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
    public DateTime ReservationDate { get; set; }
    
    public Reservation() {  }
    
    public Reservation(int id, int clientId, Client client, int travelPackageId, TravelPackage travelPackage, DateTime reservationDate)
    {
        Id = id;
        ClientId = clientId;
        Client = client;
        TravelPackageId = travelPackageId;
        TravelPackage = travelPackage;
        ReservationDate = reservationDate;
    }
}