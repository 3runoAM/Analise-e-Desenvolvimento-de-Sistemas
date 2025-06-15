using System.ComponentModel.DataAnnotations;
using AssessmentApp.ValidationAttributes;

namespace AssessmentApp.Models;

public class Client
{
    [Key]
    [Required]
    public int Id { get; set; }
    
    [Required]
    [StringLength(100, ErrorMessage = "Máximo de 100 caracteres")]
    public string Name { get; set; }
    
    [Required]
    [EmailAddress(ErrorMessage = "Email inválido")]
    public string Email { get; set; }
    
    public bool IsActive { get; set; } = true;

    public List<Reservation> Reservations { get; set; }
    
    public Client() {  }
    
    public Client(int id, string name, string email)
    {
        Id = id;
        Name = name;
        Email = email;
        Reservations = new List<Reservation>();
    }
}