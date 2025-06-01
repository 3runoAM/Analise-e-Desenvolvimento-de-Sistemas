namespace TestePerformance1.Exercicio06;

public class Logger06
{
    public delegate void LogMessageDelegate(string message);
    public static void Run()
    {
        LogMessageDelegate logToAll = SubscribeToAllLogger();

        string message = "Ol�, Mundo! Essa � a mensagem a ser recebida por todos.";
        logToAll(message);
    }

    private static LogMessageDelegate SubscribeToAllLogger()
    {
        LogMessageDelegate logMessage = LogToConsole;
        logMessage += LogToFile;
        logMessage += LogToDataBase;

        return logMessage;
    }

    private static void LogToConsole(string message)
    {
        Console.WriteLine("| Exibindo mensagem no console:");
        Console.WriteLine("| " + message);
        Console.WriteLine();
    }

    private static void LogToFile(string message)
    {
        Console.WriteLine("| Escrevendo mensagem no arquivo...");
        Console.WriteLine("| Escrevendo... " + message);
        Console.WriteLine();
    }

    private static void LogToDataBase(string message)
    {
        Console.WriteLine("| Salvando no banco de dados");
        Console.WriteLine("| Mensagem salva: " + message);
        Console.WriteLine();
    }
}