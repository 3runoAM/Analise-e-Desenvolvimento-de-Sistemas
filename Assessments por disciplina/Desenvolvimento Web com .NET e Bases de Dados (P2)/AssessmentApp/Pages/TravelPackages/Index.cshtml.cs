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
using AssessmentApp.Utils;

namespace AssessmentApp.Pages.TravelPackages
{
    public class IndexModel : PageModel
    {
        private readonly ITravelPackageService _packageService;
        private readonly Action<String> _logger;

        public List<TravelPackage> AvailablePackages { get;set; } = default!;
        public IndexModel(ITravelPackageService packageService)
        {
            _packageService = packageService;
            AvailablePackages = new List<TravelPackage>();
            _logger = Log.subscribeToAll();
        }

        public async Task OnGet()
        {
            _logger("Carregando pacotes de viagem disponíveis...");
            AvailablePackages = _packageService.GetAllAvailableTravelPackages();
            if (AvailablePackages == null || !AvailablePackages.Any())
            {
                _logger("Nenhum pacote de viagem disponível no momento.");
            }
            else
            {
                _logger($"Total de pacotes de viagem disponíveis: {AvailablePackages.Count}");
            }
        }

    }
}