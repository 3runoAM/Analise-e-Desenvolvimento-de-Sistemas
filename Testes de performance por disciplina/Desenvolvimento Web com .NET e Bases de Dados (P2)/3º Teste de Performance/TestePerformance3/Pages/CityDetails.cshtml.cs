using CityBreaks.Data.Services.Interfaces;
using CityBreaks.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CityBreaks.Pages;

public class CityDetails : PageModel{
    
    private readonly ICityService _cityService;
    
    public City City { get; set; }
    
    public CityDetails(ICityService cityService){
        _cityService = cityService;
    }
    
    public async Task<IActionResult> OnGetAsync(string name)
    {
        City = await _cityService.GetByNameAsync(name);

        if (City == null)
        {
            return Redirect("/Error");
        }

        return Page();
    }
}