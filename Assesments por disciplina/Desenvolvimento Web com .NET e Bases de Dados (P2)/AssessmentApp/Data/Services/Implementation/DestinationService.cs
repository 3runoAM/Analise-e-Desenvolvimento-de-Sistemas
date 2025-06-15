using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Utils;


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
    
    // MÉTODOS PRIVADOS ------------------------------------------------------------------------------------------------
    private void LogMessage(string message)
    {
        _logAction(message);
    }
}