using CityBreaks.Data.Services.Interfaces;
using CityBreaks.Models;
using Microsoft.EntityFrameworkCore;

namespace CityBreaks.Data.Services.Implementations;

public class PropertyService : IPropertyService
{
    private readonly CityBreaksContext _context;
    
    public PropertyService(CityBreaksContext context)
    {
        _context = context;
    }
    
    public async Task<List<Property>> GetFilteredAsync(decimal? minPrice, decimal? maxPrice, string cityName, string propertyName)
    {
        IQueryable<Property> query = _context.Properties;
        
        if (minPrice.HasValue)
            query = query.Where(p => p.PricePerNight >= minPrice.Value);
        
        if (maxPrice.HasValue)
            query = query.Where(p => p.PricePerNight <= maxPrice.Value);
        
        if (!string.IsNullOrWhiteSpace(cityName))
            query = query.Where(p => p.City.CityName.Contains(cityName));
        
        if (!string.IsNullOrWhiteSpace(propertyName))
            query = query.Where(p => p.Name.Contains(propertyName));
        
        return await query
            .Include(p => p.City)
            .OrderBy(p => p.Name)
            .ToListAsync();
    }
}