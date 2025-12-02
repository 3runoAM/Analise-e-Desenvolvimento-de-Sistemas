using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AssessmentApp.Data;
using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace AssessmentApp.Pages.Reservations
{
    public class DetailsModel : PageModel
    {
        private readonly IReservationService _reservationService;

        public DetailsModel(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }

        public Reservation Reservation { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reservation = _reservationService.GetReservationsById(id.Value);

            if (reservation != null)
            {
                Reservation = reservation;

                return Page();
            }

            return NotFound();
        }
    }
}
