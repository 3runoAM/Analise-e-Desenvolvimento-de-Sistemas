namespace TesteDePerformance2.questao_4;

public class Questao4{
    public static void Run(){
        Console.WriteLine("Digite seu nome: ");
        string name = Console.ReadLine();
        
        Console.WriteLine("Digite sua idade: ");
        string age = Console.ReadLine();
        
        Console.WriteLine("Digite seu telefone: ");
        string phoneNumber = Console.ReadLine();
        
        Console.WriteLine("Digite seu e-mail: ");
        string email = Console.ReadLine();
        
        Console.WriteLine("| Dados cadastrados: ");
        Console.WriteLine("|\tNome: " + name);
        Console.WriteLine("|\tIdade: " + age);
        Console.WriteLine("|\tTelefone: " + phoneNumber);
        Console.WriteLine("|\tE-mail: " + email);
    }
}