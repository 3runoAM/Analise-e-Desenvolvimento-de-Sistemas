using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CityBreaks.Models;

public class City{
    [Key]
    public int Id { get; set; }
    public string CityName { get; set; }
    public int CountryId{ get; set; }
    public Country Country { get; set; }
    public List<Property> Properties { get; set; }
    public City()
    {
    }
}