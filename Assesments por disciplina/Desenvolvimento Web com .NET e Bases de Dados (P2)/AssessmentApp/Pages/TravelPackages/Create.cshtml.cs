using AssessmentApp.Data.Services.Implementation;
using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Models;
using AssessmentApp.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace AssessmentApp.Pages.TravelPackages
{
    public class CreateTravelPackageModel : PageModel
    {
        private readonly ITravelPackageService _travelPackageService;
        private readonly IDestinationService _destinationService;
        private Action<string> _logAction;

        public CreateTravelPackageModel(ITravelPackageService travelPackageService, IDestinationService destinationService)
        {
            _travelPackageService = travelPackageService;
            _destinationService = destinationService;
            AvailableDestinations = new List<Destination>();
            _logAction = Log.subscribeToAll();
        }

        [BindProperty]
        public TravelPackage TravelPackage { get; set; }

        [BindProperty]
        public List<int> SelectedDestinations { get; set; }

        public List<Destination> AvailableDestinations { get; set; }

        public void OnGet()
        {
            _logAction("Acessando a página de criação de pacote de viagem...");
            TravelPackage = new TravelPackage();

            _logAction("Carregando destinos disponíveis...");
            AvailableDestinations = _destinationService.GetAllDestinations();
            if (AvailableDestinations == null || !AvailableDestinations.Any())
            {
                _logAction("Nenhum destino disponível encontrado.");
            }

        }

        public IActionResult OnPost()
        {
            ModelState.Remove("TravelPackage.Destinations");
            ModelState.Remove("TravelPackage.Reservations");

            _logAction("Tentando criar um novo pacote de viagem...");
            if (!ModelState.IsValid)
            {
                foreach (var error in ModelState.Values.SelectMany(v => v.Errors))
                {
                    _logAction($"ERRO: {error.ErrorMessage}");
                }
                _logAction("Modelo inválido, retornando à página de criação...");
                AvailableDestinations = _destinationService.GetAllDestinations();
                return Page();
            }

            _logAction("Modelo válido, verificando destinos selecionados...");
            if (SelectedDestinations == null || !SelectedDestinations.Any())
            {
                _logAction("Nenhum destino selecionado, adicionando erro ao modelo...");
                ModelState.AddModelError(string.Empty, "É necessário selecionar pelo menos um destino");
                _logAction("Retornando à página de criação com destinos disponíveis...");
                AvailableDestinations = _destinationService.GetAllDestinations();
                return Page();
            }

            _logAction("Destinos selecionados válidos, criando pacote de viagem...");
            TravelPackage.Destinations = new List<Destination>();

            _logAction("Adicionando destinos selecionados ao pacote de viagem...");
            foreach (var destinationId in SelectedDestinations)
            {
                _logAction($"Adicionando destino com ID: {destinationId} ao pacote de viagem...");
                var destination = _destinationService.GetDestinationById(destinationId);
                TravelPackage.Destinations.Add(destination);
            }

            _logAction("Definindo limite de capacidade do pacote de viagem...");
            TravelPackage.Reservations = new List<Reservation>();

            _logAction("Adicionando pacote de viagem ao serviço...");
            _travelPackageService.AddTravelPackage(TravelPackage);

            _logAction($"Pacote de viagem '{TravelPackage.Title}' criado com sucesso!");
            return RedirectToPage("Index");
        }
    }
}
