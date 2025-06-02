using CityBreaks.Models;

namespace CityBreaks.Data.Services.Interfaces;

public interface ICityService
{
    Task<City> GetCityByIdAsync(int id);
    Task<List<City>> GetAllAsync();
    Task<City> GetByNameAsync(string name);
    void AddProperty(Property property);
}