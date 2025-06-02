using System.ComponentModel.DataAnnotations;

namespace CityBreaks.Models;

public class Property{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal PricePerNight { get; set; }
    public DateTime? DeletedAt { get; set; }
    public int CityId { get; set; }
    public City City { get; set; }
    public Property()
    {
    }
}