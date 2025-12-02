using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Models;
using AssessmentApp.Utils;
using Microsoft.EntityFrameworkCore;

namespace AssessmentApp.Data.Services.Implementation;

public class DestinationService : IDestinationService
{
    private readonly AppDbContext _context;
    private readonly Action<string> _logAction;

    public DestinationService(AppDbContext context)
    {
        _context = context;
        _logAction = Log.subscribeToAll();
    }
    
    public void AddDestination(Destination destination)
    {
        if (destination == null)
        {
            LogMessage("Tentativa de adicionar um destino nulo");
            throw new ArgumentNullException(nameof(destination), "Destino não pode ser nulo");
        }

        _context.Destinations.Add(destination);
    
        _context.SaveChanges();
        LogMessage($"Destino {destination.Name} adicionado com sucesso");
    }
    
    public List<Destination> GetAllDestinations()
    {
        LogMessage("Obtendo todos os destinos...");
        return [.. _context.Destinations];
    }
    
    public Destination GetDestinationById(int id)
    {
        LogMessage($"Obtendo destino com ID: {id}...");
        var destination = _context.Destinations.Find(id);
        
        if (destination == null)
        {
            LogMessage($"Destino com ID: {id} não encontrado");
            throw new KeyNotFoundException($"Destino com ID: {id} não encontrado");
        }
        
        return destination;
    }

    public async void DeleteDestinationByIdAsync(int id)
    {
        LogMessage($"Excluindo destino com ID: {id}...");
        Destination destination = _context.Destinations.Find(id);

        if (destination == null)
        {
            LogMessage($"Destino com ID: {id} não encontrado para exclusão");
            throw new KeyNotFoundException($"Destino com ID: {id} não encontrado para exclusão");
        }
        
        _context.Destinations.Remove(destination);
        await _context.SaveChangesAsync();
        
        LogMessage($"Destino com ID: {id} excluído com sucesso");
    }
    
    // MÉTODOS PRIVADOS ------------------------------------------------------------------------------------------------
    private void LogMessage(string message)
    {
        _logAction(message);
    }
}