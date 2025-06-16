
using AssessmentApp.Data;
using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;


namespace AssessmentApp.Pages.Destinations
{
    public class CreateDestinationModel : PageModel
    {

        private readonly IDestinationService _destinationService;

        [BindProperty]
        public Destination Destination { get; set; }

        public CreateDestinationModel(AppDbContext context, IDestinationService destinationService)
        {
            _destinationService = destinationService;

        }

        public IActionResult OnGet()
        {
            return Page();
        }


        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _destinationService.AddDestination(Destination);

            return RedirectToPage("/Index");
        }
    }
}
