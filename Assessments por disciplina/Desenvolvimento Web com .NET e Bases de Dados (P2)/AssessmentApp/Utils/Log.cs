namespace AssessmentApp.Utils;


// Implemente um Action<string> com três métodos: LogToConsole, LogToFile e LogToMemory. Utilize o delegate para registrar operações do sistema (ex: criação de reserva).
public class Log
{
    public static Action<string> subscribeToAll()
    {
        Action<string> logMessage = LogToConsole;
        logMessage += LogToFile;
        logMessage += LogToMemory;
        
        return logMessage;
    }
    
    private static void LogToConsole(string message)
    {
        Console.WriteLine($"| Exibindo no console:\n\t[{message}]");
    }
    
    
    private static void LogToFile(string message)
    {
        Console.WriteLine($"| Escrevendo no arquivo:\n\t| [{message}]");
    }
    
    private static void LogToMemory(string message)
    {
        Console.WriteLine($"| Escrevendo na memória:\n\t| [{message}]");
    }
}