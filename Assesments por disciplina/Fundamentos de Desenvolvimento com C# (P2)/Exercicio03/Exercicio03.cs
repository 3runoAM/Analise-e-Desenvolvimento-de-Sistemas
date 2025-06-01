namespace Assessment.Exercicio03;

public class Exercicio03
{
    public static void Run()
    {
        Console.Write("Digite o primeiro número:\n> ");
        double firstNumber = double.Parse(Console.ReadLine());

        Console.Write("Escolha a operação\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão:\n\t> ");
        string operation = Console.ReadLine();

        Console.Write("Digite o segundo número:\n> ");
        double secondNumber = double.Parse(Console.ReadLine());

        switch (operation)
        {
            case "1":
                Console.WriteLine($"O resultado da soma é: {firstNumber + secondNumber}");
                break;
            case "2":
                Console.WriteLine($"O resultado da subtração é: {firstNumber - secondNumber}");
                break;
            case "3":
                Console.WriteLine($"O resultado da multiplicação é: {firstNumber * secondNumber}");
                break;
            case "4":
                if (secondNumber == 0)
                {
                    Console.WriteLine("ERRO! Não é possível dividir por zero.");
                    break;
                }
                Console.WriteLine($"O resultado da divisão é: {firstNumber / secondNumber}");
                break;
            default:
                Console.WriteLine("Operação inválida.");
                break;
        }
    }
}