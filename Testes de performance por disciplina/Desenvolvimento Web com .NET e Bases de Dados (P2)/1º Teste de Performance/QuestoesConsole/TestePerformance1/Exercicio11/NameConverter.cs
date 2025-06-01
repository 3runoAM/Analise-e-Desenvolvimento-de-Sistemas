using System.Runtime.CompilerServices;

namespace TestePerformance1.Exercicio11;

public class NameConverter{
    public static Func<string, string, string> ProcessName = (name, lastName) => $"{name} {lastName}".ToUpper().Replace(" ", "");
    
    public static void Run() {
        string firstName = "Bruno";
        string lastName = "Martins";
        string name = ProcessName(firstName, lastName);
        Console.WriteLine($"Nome: {name}");
    }
}