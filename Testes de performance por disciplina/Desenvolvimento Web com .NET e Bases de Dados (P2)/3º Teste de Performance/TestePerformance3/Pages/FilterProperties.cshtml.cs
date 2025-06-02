using CityBreaks.Data;
using CityBreaks.Data.Services.Interfaces;
using CityBreaks.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace CityBreaks.Pages;

public class FilterProperties : PageModel
{
    private readonly IPropertyService _propertyService;

    public FilterProperties(IPropertyService propertyService)
    {
        _propertyService = propertyService;
    }
    
        public List<Property> Properties{ get; set; }

    [BindProperty] public decimal? MinPrice{ get; set; }

    [BindProperty] public decimal? MaxPrice{ get; set; }

    [BindProperty] public string CityName{ get; set; }

    [BindProperty] public string PropertyName{ get; set; }

    public async void OnGetAsync()
    {
        Properties = await _propertyService.GetFilteredAsync(
            MinPrice,
            MaxPrice,
            CityName,
            PropertyName
        );
    }
}