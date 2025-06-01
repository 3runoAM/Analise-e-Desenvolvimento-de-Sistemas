using System.ComponentModel.DataAnnotations;

namespace TestePerformance2.Pages
{
    public class Country
    {
        [Required]
        public string Name { get; set; }
        [MaxLength(2)]
        public string Code { get; set; }
    }
}
