using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using AssessmentApp.Data;
using AssessmentApp.Models;

namespace AssessmentApp.Pages.Destinations
{
    public class DetailsModel : PageModel
    {
        private readonly AssessmentApp.Data.AppDbContext _context;

        public DetailsModel(AssessmentApp.Data.AppDbContext context)
        {
            _context = context;
        }

        public Destination Destination { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var destination = await _context.Destinations.FirstOrDefaultAsync(m => m.Id == id);

            if (destination is not null)
            {
                Destination = destination;

                return Page();
            }

            return NotFound();
        }
    }
}
