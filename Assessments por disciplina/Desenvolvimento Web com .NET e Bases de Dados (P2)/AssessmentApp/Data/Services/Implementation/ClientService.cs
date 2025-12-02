using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Models;
using AssessmentApp.Utils;

namespace AssessmentApp.Data.Services.Implementation;

public class ClientService : IClientService
{
    private readonly AppDbContext _context;
    private readonly Action<string> _logAction;
    
    public ClientService(AppDbContext context)
    {
        _context = context;
        _logAction = Log.subscribeToAll();
    }
    
    public void AddClient(Client client)
    {
        if (client == null)
        {
            LogMessage("Tentativa de adicionar um cliente nulo");
            throw new ArgumentNullException(nameof(client), "Cliente não pode ser nulo");
        }

        _context.Clients.Add(client);
        
        _context.SaveChanges();
        LogMessage($"Cliente {client.Name} adicionado com sucesso");
    }

    public Client GetClientByEmail(string email)
    {
        if (string.IsNullOrWhiteSpace(email))
        {
            LogMessage("Tentativa de buscar cliente com email nulo ou vazio");
            throw new ArgumentException("Email não pode ser nulo ou vazio", nameof(email));
        }

        var client = _context.Clients.FirstOrDefault(c => c.Email.ToLowerInvariant().Equals(email.ToLowerInvariant()));
        
        if (client == null)
        {
            LogMessage($"Cliente com email {email} não encontrado");
            return null;
        }


        LogMessage($"Cliente {client.Name} encontrado com sucesso");
        return client;
    }


    public void DeleteClient(int clientId)
    {
        var client = _context.Clients.Find(clientId);
        
        if (client == null)
        {
            LogMessage($"Tentativa de deletar cliente com ID {clientId} que não existe");
            throw new KeyNotFoundException($"Cliente com ID {clientId} não encontrado");
        }
        
        client.isActive = false;
        _context.Clients.Update(client);

        _context.SaveChanges();
        LogMessage($"Cliente {client.Name} deletado com sucesso");
    }

    // MÉTODOS PRIVADOS ------------------------------------------------------------------------------------------------
    private void LogMessage(string message)
    {
        _logAction(message);
    }
}