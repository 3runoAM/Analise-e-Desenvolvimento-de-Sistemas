using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using AssessmentApp.Models;
using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Utils;

namespace AssessmentApp.Pages.Reservations
{
    public class CreateReservationModel : PageModel
    {
        private readonly ITravelPackageService _packageService;
        private readonly IReservationService _reservationService;

        [BindProperty]
        public int PackageId { get; set; }

        [BindProperty]
        public string ClientName { get; set; }

        [BindProperty]
        public string ClientEmail { get; set; }

        public TravelPackage TravelPackage { get; set; }

        public Action<string> _logAction;

        public CreateReservationModel(ITravelPackageService packageService, IReservationService reservationService)
        {
            _packageService = packageService;
            _reservationService = reservationService;
            _reservationService = reservationService;
            _logAction = Log.subscribeToAll();
        }

        public IActionResult OnGet(int? packageId)
        {
            if (packageId == null)
            {
                return RedirectToPage("/TravelPackages/Index");
            }

            _logAction($"Iniciando criação de reserva para o pacote de ID: {packageId.Value}");
            PackageId = packageId.Value;

            try
            {
                _logAction($"Buscando pacote de viagem com ID: {PackageId}");
                TravelPackage = _packageService.GetTravelPackageById(PackageId);

                if (!_packageService.IsTravelPackageAvailableById(PackageId)) return RedirectToPage("/TravelPackages/Index");
            }
            catch (Exception)
            {
                _logAction($"Erro ao buscar pacote de viagem com ID: {PackageId}");
                return RedirectToPage("/TravelPackages/Index");
            }

            if (TravelPackage == null)
            {
                _logAction($"Pacote de viagem com ID: {PackageId} não encontrado.");
                return RedirectToPage("/TravelPackages/Index");
            }

            return Page();
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                _logAction("Modelo inválido ao tentar criar reserva.");
                TravelPackage = _packageService.GetTravelPackageById(PackageId);
                return Page();
            }

            try
            {
                if (!_packageService.IsTravelPackageAvailableById(PackageId))
                {
                    _logAction($"Pacote de viagem com ID: {PackageId} não está disponível.");
                    return RedirectToPage("/TravelPackages/Index");
                }


                _logAction($"Criando cliente com nome: {ClientName} e email: {ClientEmail}");
                var client = new Client
                {
                    Name = ClientName,
                    Email = ClientEmail,
                };

                _logAction("Adicionando cliente ao serviço de reservas...");
                var reservation = new Reservation
                {
                    TravelPackageId = PackageId,
                    Client = client,
                    ReservationDate = DateTime.Now
                };


                _logAction("Criando nova reserva...");
                _reservationService.AddReservation(reservation);

                TempData["SuccessMessage"] = "Reserva solicitada com sucesso!";
                return RedirectToPage("/Reservations/Index");
            }
            catch (Exception ex)
            {
                _logAction($"Erro ao criar reserva: {ex.Message}");
                ModelState.AddModelError(string.Empty, "Ocorreu um erro ao fazer a reserva: " + ex.Message);
                TravelPackage = _packageService.GetTravelPackageById(PackageId);
                return Page();
            }
        }
    }
}