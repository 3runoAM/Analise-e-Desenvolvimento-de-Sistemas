using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using AssessmentApp.Data;
using AssessmentApp.Models;
using AssessmentApp.Data.Services.Interfaces;

namespace AssessmentApp.Pages.Destinations
{
    public class IndexModel : PageModel
    {
        private readonly IDestinationService _destinationService;

        public IndexModel(IDestinationService destinationService)
        {
            _destinationService = destinationService;
        }

        public List<Destination> Destination { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Destination = _destinationService.GetAllDestinations();
        }
    }
}
