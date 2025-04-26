namespace TesteDePerformance2.questao_12;

public class Questao12{
    public static void Run(){
        int secretNum = new Random().Next(0, 100);
        
        while (true){
            Console.Write("Tente adivinhar o número secreto:\n> ");
            int userGuess = int.Parse(Console.ReadLine());
            Console.WriteLine();
            if (secretNum > userGuess){
                Console.Write("O número secreto é maior que o seu palpite.\n");
                continue;
            }
            if (secretNum < userGuess){
                Console.Write("O número secreto é menor que o seu palpite\n");
                continue;
            }
            
            Console.WriteLine($"Parabéns, você acertou! O número secreto é {secretNum}.");
            break;
        }
    }
}