using System.ComponentModel.DataAnnotations;
using AssessmentApp.ValidationAttributes;
using Microsoft.AspNetCore.Mvc;

namespace AssessmentApp.Models;

public class Client
{
    [Key]
    [Required]
    public int Id { get; set; }

    [BindProperty]
    [Required(ErrorMessage = "O nome é obrigatório")]
    [StringLength(100, MinimumLength = 3, ErrorMessage = "O nome deve ter entre 3 e 100 caracteres")]
    public string Name { get; set; }

    [BindProperty]
    [Required(ErrorMessage = "O email é obrigatório")]
    [EmailAddress(ErrorMessage = "Formato de email inválido")]
    public string Email { get; set; }

    public List<Reservation> Reservations { get; set; }

    public bool isActive { get; set; } = true;

    public Client() {  }
    
    public Client(int id, string name, string email)
    {
        Id = id;
        Name = name;
        Email = email;
        Reservations = new List<Reservation>();
    }
}