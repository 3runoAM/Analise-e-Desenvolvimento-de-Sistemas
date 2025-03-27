namespace TesteDePerformance2.questao_10;

public class Questao10{
    public static void Run(){
        Console.WriteLine("Digite um número maior que zero: ");
        int count;
        do{
            count = int.Parse(Console.ReadLine());
        } while (count <= 0);
        
        Console.Clear();
        
        do{
            Console.WriteLine(count);
            count--;
        } while (count >= 0);
    }
}