using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Models;
using AssessmentApp.Utils;
using Microsoft.EntityFrameworkCore;


namespace AssessmentApp.Data.Services.Implementation;


public class TravelPackageService : ITravelPackageService
{
    private readonly AppDbContext _context;
    private readonly Action<String> _logAction;
    
    public TravelPackageService(AppDbContext context)
    {
        _context = context;
        _logAction = Log.subscribeToAll();
    }
    
    public void AddTravelPackage(TravelPackage travelPackage)
    {
        if (travelPackage == null)
        {
            LogMessage("Tentativa de adicionar um pacote de viagem nulo");
            throw new ArgumentNullException(nameof(travelPackage), "Pacote de viagem não pode ser nulo");
        }
        
        _context.TravelPackages.Add(travelPackage);
        
        _context.SaveChanges();
        LogMessage($"Pacote de viagem {travelPackage.Title} adicionado com sucesso");
    }
    
    public List<TravelPackage> GetAllAvailableTravelPackages()
    {
        LogMessage("Obtendo todos os pacotes de viagem...");
        return _context.TravelPackages
            .Include(tp => tp.Destinations)
            .Include(tp => tp.Reservations)
        .Where(tp => tp.Reservations.Count < tp.CapacityLimit)
            .ToList();
    }
    
    public TravelPackage GetTravelPackageById(int id)
    {
        LogMessage($"Obtendo pacote de viagem com ID: {id}...");
        var travelPackage = _context.TravelPackages
            .Include(tp => tp.Destinations)
            .Include(tp => tp.Reservations)
            .FirstOrDefault(tp => tp.Id == id);
        
        if (travelPackage == null)
        {
            LogMessage($"Pacote de viagem com ID: {id} não encontrado");
            throw new KeyNotFoundException($"Pacote de viagem com ID: {id} não encontrado");
        }
        
        return travelPackage;
    }
    
    public void DeleteTravelPackage(int id)
    {
        LogMessage($"Excluindo pacote de viagem com ID: {id}...");
        var travelPackage = _context.TravelPackages.Find(id);
        
        if (travelPackage == null)
        {
            LogMessage($"Pacote de viagem com ID: {id} não encontrado");
            throw new KeyNotFoundException($"Pacote de viagem com ID: {id} não encontrado");
        }
        
        _context.TravelPackages.Remove(travelPackage);
        
        _context.SaveChanges();
        LogMessage($"Pacote de viagem com ID: {id} excluído com sucesso");
    }
    
    public bool IsTravelPackageAvailableById(int travelPackageId)
    {
        LogMessage($"Verificando disponibilidade do pacote de viagem com ID: {travelPackageId}");
        var travelPackage = _context.TravelPackages
            .Include(tp => tp.Reservations)
            .FirstOrDefault(tp => tp.Id == travelPackageId);
        if (travelPackage == null)
        {
            LogMessage("Pacote de viagem não encontrado");
            throw new ArgumentNullException(nameof(travelPackage), "Pacote de viagem não pode ser nulo");
        }
        
        bool isAvailable = travelPackage.Reservations.Count < travelPackage.CapacityLimit;
        if (isAvailable){
            LogMessage("Pacote de viagem disponível para reserva");
        }
        else{
            LogMessage("Pacote de viagem não disponível para reserva");
            travelPackage.InvokeCapacityReached();
        }

        return isAvailable;
    }
    
    // MÉTODOS PRIVADOS ------------------------------------------------------------------------------------------------
    private void LogMessage(string message)
    {
        _logAction("| " + message);
    }
}