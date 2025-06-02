using System.Runtime.InteropServices.JavaScript;
using CityBreaks.Data.Services.Interfaces;
using CityBreaks.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CityBreaks.Pages;

public class CreateProperty : PageModel
{
    private ICityService _cityService;
    public List<City> Cities;
    
    public CreateProperty(ICityService cityService)
    {
        _cityService = cityService;
    }
    
    public async void OnGetAsync()
    {
        var cityList = await _cityService.GetAllAsync();
        
        if (cityList != null)
        {
            Cities = cityList;
        }
        else
        {
            Cities = new List<City>();
        }
    }
    
    public void OnPostAsync(string name, double pricePerNight,int cityId)
    {
        var property = new Property
        {
            Name = name,
            PricePerNight = (decimal)pricePerNight,
            CityId = cityId
        };
        
        Response.Redirect("/");
    }
}