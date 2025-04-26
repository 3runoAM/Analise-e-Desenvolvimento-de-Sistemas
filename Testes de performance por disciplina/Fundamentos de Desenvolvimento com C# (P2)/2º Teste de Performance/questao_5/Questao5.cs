namespace TesteDePerformance2.questao_4;

public class Questao5{
    public static void Run(){
        Console.WriteLine("Digite uma temperatura em Celsius: ");
        double celsius = double.Parse(Console.ReadLine());
        
        double fahrenheit = (celsius * 9/5) + 32;
        Console.WriteLine($"A temperatura em Fahrenheit é: {fahrenheit:F2}");
        
        double kelvin = celsius + 273.15;
        Console.WriteLine($"A temperatura em Kelvin é: {kelvin:F2}");
    }
}