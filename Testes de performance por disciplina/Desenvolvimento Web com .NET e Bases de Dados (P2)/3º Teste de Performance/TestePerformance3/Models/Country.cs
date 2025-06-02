using System.ComponentModel.DataAnnotations;

namespace CityBreaks.Models
{ 
    public class Country
    {
        [Key]
        public int Id { get; set; }
        public string CountryCode { get; set; }
        public string CountryName { get; set; }
        public List<City> Cities { get; set; }
        public Country()
        {
        }
    }
}