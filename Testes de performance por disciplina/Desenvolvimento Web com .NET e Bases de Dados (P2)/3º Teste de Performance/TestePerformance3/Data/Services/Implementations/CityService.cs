using CityBreaks.Data.Services.Interfaces;
using CityBreaks.Models;
using Microsoft.EntityFrameworkCore;

namespace CityBreaks.Data.Services.Implementations;

public class CityService : ICityService {
    private readonly CityBreaksContext _context;

    public CityService(CityBreaksContext context){
        _context = context;
    }

    public async Task<List<City>> GetAllAsync(){
        return await _context.Cities
            .Include(city => city.Country)
            .Include(city => city.Properties.Where(p => p.DeletedAt == null))
            .ToListAsync();
    }
    
    public async Task<City> GetByNameAsync(string name){
        return await _context.Cities
            .Include(city => city.Country)
            .Include(city => city.Properties.Where(p => p.DeletedAt == null))
            .FirstOrDefaultAsync(city => EF.Functions.Collate(city.CityName, "NOCASE") == name);
    }
    
    public async Task<City> GetCityByIdAsync(int id){
        return await _context.Cities
            .Include(city => city.Country)
            .Include(city => city.Properties.Where(p => p.DeletedAt == null))
            .FirstOrDefaultAsync(city => city.Id == id);
    }

    public void AddProperty(Property property){
        var city = GetCityByIdAsync(property.Id);
        
        if (city.Result != null) {
            city.Result.Properties.Add(property);
            _context.SaveChangesAsync();
        }
    }
}