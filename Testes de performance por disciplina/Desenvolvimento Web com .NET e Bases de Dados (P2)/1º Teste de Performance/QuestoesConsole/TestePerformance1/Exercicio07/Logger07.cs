namespace TestePerformance1.Exercicio07;

public class Logger07
{
    public static void Run()
    {
        Action<string> logToAll = SubscribeToAllLogger();

        string message = "Ol?, Mundo! Essa ? a mensagem a ser recebida por todos.";
        logToAll?.Invoke(message);
    }

    private static Action<string> SubscribeToAllLogger()
    {
        Action<string> logMessage = LogToConsole;
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