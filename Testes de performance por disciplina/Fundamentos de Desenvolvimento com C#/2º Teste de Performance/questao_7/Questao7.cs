namespace TesteDePerformance2.questao_7;

public class Questao7{
    public static void Run(){
        Console.WriteLine("Digite um número inteiro: ");
        int numero = int.Parse(Console.ReadLine());
        
        if(numero % 2 == 0){
            Console.WriteLine("O número " + numero + " é par.");
        }else{
            Console.WriteLine("O número " + numero + " é ímpar.");
        }
    }
}