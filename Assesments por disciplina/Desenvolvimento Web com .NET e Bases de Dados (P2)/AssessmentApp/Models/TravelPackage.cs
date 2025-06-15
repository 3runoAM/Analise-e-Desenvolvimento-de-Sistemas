using System.ComponentModel.DataAnnotations;
using AssessmentApp.ValidationAttributes;

namespace AssessmentApp.Models;

public class TravelPackage
{
    [Key]
    [Required] public int Id { get; set; }

    [Required]
    [StringLength(100, ErrorMessage = "Máximo de 100 caracteres")]
    public string Title { get; set; }

    [Required]
    [FutureDate(ErrorMessage = "A data de início deve ser no futuro.")]
    public DateTime StartDate { get; set; }
    
    [Required]
    [FutureDate(ErrorMessage = "A data de início deve ser no futuro.")]
    public DateTime EndDate { get; set; }

    [Required]
    [Range(1, int.MaxValue, ErrorMessage = "O limite de capacidade deve ser maior que zero.")]
    public int CapacityLimit { get; set; }

    [Required]
    [Range(0.00, double.MaxValue, ErrorMessage = "O preço por dia deve ser maior ou igual a zero.")]
    public decimal PricePerDay { get; set; }

    [Required]
    public List<Destination> Destinations { get; set; }
    
    [Required]
    public List<Reservation> Reservations { get; set; }
    
    public decimal TotalPrice => CalculateTotalPrice();
    
    public bool IsActive { get; set; } = true;
    
    private event Action<string> CapacityReached;
    
    public TravelPackage() {  }

    public TravelPackage(int id, string title, DateTime startDate, DateTime endDate, int capacityLimit, decimal pricePerDay)
    {
        {
            Id = id;
            Title = title;
            StartDate = startDate;
            EndDate = endDate;
            CapacityLimit = capacityLimit;
            PricePerDay = pricePerDay;
            Destinations = new List<Destination>();
        }
    }
    
    public void InvokeCapacityReach()
    {
        CapacityReached?.Invoke($"O pacote {Title} está lotado, capacidade máxima de {CapacityLimit} atingida");
    }
    
    private decimal CalculateTotalPrice()
    {
        int duration = (EndDate - StartDate).Days + 1;
        return duration * PricePerDay;
    }
}