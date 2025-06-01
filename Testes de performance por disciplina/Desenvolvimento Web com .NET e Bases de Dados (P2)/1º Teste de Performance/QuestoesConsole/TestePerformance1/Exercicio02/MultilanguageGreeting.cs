namespace TestePerformance1.Exercicio02;

public class MultilanguageGreeting{
    private static Action PortugueseGreeting = () => Console.WriteLine("Olá, Mundo! Boas-vindas!");
    private static Action SpanishGreeting = () => Console.WriteLine("¡Hola, Mundo! ¡Bienvenidos!");
    private static Action EnglishGreeting = () => Console.WriteLine("Hello, World! Welcome!");
    
    public static void Run(){
        string language;
        do{
            Console.Write("Digite o idioma:\n1. Português\n2. Inglês\n3. Espanhol\n4. Para sair\n>");
            language = Console.ReadLine();
            
            switch (language){
                case "1":
                    PortugueseGreeting();
                    break;
                case "2":
                    EnglishGreeting();
                    break;
                case "3":
                    SpanishGreeting();
                    break;
                case "4":
                    Console.WriteLine("Saindo...");
                    break;
                default:
                    Console.WriteLine("Idioma inválido.");
                    return;
            }
            Console.WriteLine();
        } while (language != "4");
    }
}