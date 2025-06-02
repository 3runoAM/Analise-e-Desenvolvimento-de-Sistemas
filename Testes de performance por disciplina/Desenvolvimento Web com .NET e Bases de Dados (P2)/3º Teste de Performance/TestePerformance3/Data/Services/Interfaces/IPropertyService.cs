using CityBreaks.Models;

namespace CityBreaks.Data.Services.Interfaces;

public interface IPropertyService
{
    public Task<List<Property>> GetFilteredAsync(decimal? minPrice, decimal? maxPrice, string cityName, string propertyName);
}