namespace TestePerformance1.Exercicio03;

public class AreaCalculator{
    private static Func<double, double, double> CalculateArea = (height, width) => height * width;

    public static void Run(){
        Console.WriteLine("Digite a altura do retângulo:");
        string height = Console.ReadLine();
        Console.WriteLine("Digite a largura do retângulo:");
        string width = Console.ReadLine();

        if (double.TryParse(height, out double h) && double.TryParse(width, out double w)){
            Console.WriteLine($"A área do retângulo é: {CalculateArea(h, w):F2}");
        }
        else{
            Console.WriteLine("Entrada inválida. Altura e largura devem ser números.");
        }
    }
}