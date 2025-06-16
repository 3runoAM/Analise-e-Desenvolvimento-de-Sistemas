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
    [FutureDate(ErrorMessage = "A data de encerramento deve ser no futuro.")]
    public DateTime EndDate { get; set; }

    [Required]
    [Range(1, int.MaxValue, ErrorMessage = "O limite de capacidade deve ser maior que zero.")]
    public int CapacityLimit { get; set; }

    [Required]
    [Range(0.01, double.MaxValue, ErrorMessage = "O preço por dia deve ser maior ou igual a zero.")]
    public decimal PricePerDay { get; set; }

    public List<Destination> Destinations { get; set; } = new List<Destination>();

    public List<Reservation> Reservations { get; set; } = new List<Reservation>();

    public event Action<string> CapacityReached;
    
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
            Destinations ??= new List<Destination>();
            Reservations ??= new List<Reservation>();
        }
    }
    
    public void InvokeCapacityReached()
    {
        CapacityReached?.Invoke($"O pacote {Title} está lotado, capacidade máxima de {CapacityLimit} atingida");
    }

    public decimal CaculateTotalPrice()
    {
        var totalDays = (int) (EndDate.Date - StartDate.Date).TotalDays + 1;

        return PricePerDay * totalDays;
    }
}