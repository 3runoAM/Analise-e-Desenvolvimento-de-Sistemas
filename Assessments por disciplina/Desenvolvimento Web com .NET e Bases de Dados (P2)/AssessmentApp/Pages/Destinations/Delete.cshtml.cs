using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AssessmentApp.Data;
using AssessmentApp.Data.Services.Implementation;
using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace AssessmentApp.Pages
{
    public class DeleteDestinationModel : PageModel
    {
        private readonly IDestinationService _destinationService;

        public DeleteDestinationModel(IDestinationService destinationService)
        {
            _destinationService = destinationService;
        }

        [BindProperty]
        public Destination Destination { get; set; } = default!;

        public async Task<IActionResult> OnGet(int id)
        {
            Destination destination = _destinationService.GetDestinationById(id);

            if (destination is not null)
            {
                Destination = destination;

                return Page();
            }

            return NotFound();
        }

        public async Task<IActionResult> OnPost(int id)
        {
            try
            {
                _destinationService.DeleteDestinationByIdAsync(id);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound();
            }

            return RedirectToPage("/Index");
        }
    }
}
