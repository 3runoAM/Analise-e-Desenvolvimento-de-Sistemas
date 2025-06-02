using CityBreaks.Data;
using CityBreaks.Data.Services.Interfaces;
using CityBreaks.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace CityBreaks.Pages;

public class EditProperty : PageModel
{
    private readonly CityBreaksContext _context;

    [BindProperty]
    public Property Property { get; set; }
    
    public EditProperty(CityBreaksContext context)
    {
        _context = context;
    }

    public async void OnGetAsync(int id)
    {
        Property = await _context.FindAsync<Property>(id);
    }

    public async void OnPostAsync()
    {
        if (ModelState.IsValid)
        {
            var toUpdate = await _context.Properties.FindAsync(Property.Id);

            if (await TryUpdateModelAsync(toUpdate,
                    nameof(Property),
                    p => p.Name,
                    p => p.PricePerNight))
            {
                await _context.SaveChangesAsync();
            }
        }
    }
    
    public async void OnDeleteAsync()
    {
        var toDelete = await _context.Properties.FindAsync(Property.Id);
        if (toDelete != null)
        {
            toDelete.DeletedAt = DateTime.Now;
            await _context.SaveChangesAsync();
        }
    }
}