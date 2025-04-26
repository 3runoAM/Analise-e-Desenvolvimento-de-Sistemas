using TesteDePerformance3.questao_1;
using TesteDePerformance3.questoes_02_06;
using TesteDePerformance3.questoes_07_09;
using TesteDePerformance3.questoes_10_12;

namespace TesteDePerformance3;

class TestePerformance3 {
    static void Main(string[] args){
        Console.WriteLine("| Questão 01"); // -------------------------------------------------------------------

        Book lotr = new Book("O Senhor dos Anéis", "J. R. R. Tolkien", "Fantasia", 1954);
        Console.WriteLine($"Informações do livro:\n\t{lotr.GetBookInfo()}");

        Book carrie = new Book("Carrie", "Stephen King", "Terror", 1974);
        Console.WriteLine($"Informações do livro:\n\t{carrie.GetBookInfo()}");

        /**/
        Console.WriteLine("| Questões 02 á 06"); // -------------------------------------------------------------------
        Ticket metallicaTicket = new Ticket();

        metallicaTicket.eventName = "Show do Metallica";
        metallicaTicket.price = 300.00;
        metallicaTicket.availableQuantity = 1000;

        metallicaTicket.UpdatePrice(400.00);
        metallicaTicket.UpdateAvailableQuantity(1500);
        Console.WriteLine($"Informações do show:\n\t{metallicaTicket.GetEventInfo()}");

        metallicaTicket.SetEventName("Show do Metallica - 2025");
        Console.WriteLine($"Nome do show atualizado: {metallicaTicket.GetEventName()}");
        metallicaTicket.SetPrice(600.00);
        Console.WriteLine($"Preço do ingresso atualizado: R${metallicaTicket.GetPrice()}");
        metallicaTicket.SetAvailableQuantity(2000);
        Console.WriteLine($"Quantidade de ingressos atualizada: {metallicaTicket.GetAvailableQuantity()}\n");

        Ticket ironMaidenTicket = new Ticket("Show do Iron Maiden", 250.00, 800);
        Console.WriteLine($"Informações do show:\n\t{ironMaidenTicket.GetEventInfo()}");

        /**/
        Console.WriteLine("| Questões 07 á 09"); // -------------------------------------------------------------------

        UniversityRegistration registration = new UniversityRegistration("João", "Engenharia",
            123456, "Ativa", "18/06/2025");

        Console.WriteLine($"Dados de matrícula:\n\t{registration.GetRegistrationInfo()}");
        registration.SetSuspendedStatus();
        Console.WriteLine($"Situação de matrícula alterada para: {registration.Status}");
        Console.WriteLine($"Novos dados de matrícula:\n\t{registration.GetRegistrationInfo()}");
        registration.SetActiveStatus();
        Console.WriteLine($"Situação de matrícula alterada para: {registration.Status}");
        Console.WriteLine($"Novos dados de matrícula:\n\t{registration.GetRegistrationInfo()}");

        /**/
        Console.WriteLine("Questões 10 á 12"); // ---------------------------------------------------------------------
        
        Circle circle = new Circle(3.0);
        Console.WriteLine($"Área do círculo: {circle.CalculateArea():F2}");
        
        Sphere sphere = new Sphere(5.0);
        Console.WriteLine($"Volume da esfera: {sphere.CalculateVolume():F2}");
    }
}