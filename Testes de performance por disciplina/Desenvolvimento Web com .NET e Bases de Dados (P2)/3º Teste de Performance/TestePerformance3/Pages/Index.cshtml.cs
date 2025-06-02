using CityBreaks.Data.Services.Interfaces;
using CityBreaks.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CityBreaks.Pages
{
    public class IndexModel : PageModel
    {
       private readonly ICityService _cityService;
       
       public List<City> Cities { get; set; }
       
        public IndexModel(ICityService cityService)
        {
            _cityService = cityService;
        }
        
        public void OnGet()
        {
            Cities = _cityService.GetAllAsync().Result;
        }
    }
}
