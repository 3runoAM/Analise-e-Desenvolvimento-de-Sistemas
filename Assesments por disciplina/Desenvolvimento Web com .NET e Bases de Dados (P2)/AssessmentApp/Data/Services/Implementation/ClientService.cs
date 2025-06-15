using AssessmentApp.Data.Services.Interfaces;
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
    
    // MÉTODOS PRIVADOS ------------------------------------------------------------------------------------------------
    private void LogMessage(string message)
    {
        _logAction(message);
    }
}