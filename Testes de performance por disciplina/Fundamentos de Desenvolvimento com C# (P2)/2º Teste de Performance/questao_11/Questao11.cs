namespace TesteDePerformance2.questao_11;

public class Questao11{
    public static void Run(){
        int num;
        do{
            Console.WriteLine("Digite um número maior que 0: ");
            num = int.Parse(Console.ReadLine());
        } while (num <= 0);
        
        Console.WriteLine("Tabuada de multiplicação: ");
        for(int i = 1; i <= 10; i++){
            Console.WriteLine($"{i} x {num} = {i * num}");
        }        
        Console.WriteLine("Tabuada de adição: ");
        for(int i = 1; i <= 10; i++){
            Console.WriteLine($"{i} + {num} = {i + num}");
        }
        Console.WriteLine("Tabuada de subtração: ");
        for(int i = 1; i <= 10; i++){
            Console.WriteLine($"{i} - {num} = {i - num}");
        }
        Console.WriteLine("Tabuada de divisão: ");
        for(int i = 1; i <= 10; i++){
            Console.WriteLine($"{i} / {num} = {i / num}");
        }
    }
}