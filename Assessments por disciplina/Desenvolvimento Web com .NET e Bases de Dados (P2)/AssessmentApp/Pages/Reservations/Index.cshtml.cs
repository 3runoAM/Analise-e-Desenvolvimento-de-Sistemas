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

namespace AssessmentApp.Pages.Reservations
{
    public class IndexModel : PageModel
    {
        private readonly IReservationService _reservationService;

        public IndexModel(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }

        public IList<Reservation> Reservation { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Reservation = _reservationService.GetAllReservations().ToList();
        }
    }
}
