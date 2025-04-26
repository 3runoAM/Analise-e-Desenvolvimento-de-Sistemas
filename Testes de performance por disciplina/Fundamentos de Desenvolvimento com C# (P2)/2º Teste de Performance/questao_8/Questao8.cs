namespace TesteDePerformance2.questao_8;

public class Questao8{
    public static void Run(){
        Console.WriteLine("Digite uma nota de 0 a 10: ");
        int nota = int.Parse(Console.ReadLine());
        
        if(nota < 0 || nota > 10){
            Console.WriteLine("Inválida.");
        }else if(nota <= 6){
            Console.WriteLine("Insuficiente");
        }else if(nota <= 7){
            Console.WriteLine("Regular");
        }else if(nota <= 9){
            Console.WriteLine("Bom");
        }else{
            Console.WriteLine("Excelente");
        }
    }
}