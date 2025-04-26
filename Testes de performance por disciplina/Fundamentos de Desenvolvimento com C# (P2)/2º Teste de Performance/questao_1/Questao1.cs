namespace TesteDePerformance2.questao_1;

public class Questao1{
    public static void Run(){
        while (true){
             try{
                Console.WriteLine("Digite o ano da sua data de nascimento: ");
                int year = int.Parse(Console.ReadLine());
    
                Console.WriteLine("Digite o mês da sua data de nascimento: ");
                int month = int.Parse(Console.ReadLine());
    
                Console.WriteLine("Digite o dia da sua data de nascimento: ");
                int day = int.Parse(Console.ReadLine());
    
                DateTime birthDate = new DateTime(year, month, day);
                DateTime now = DateTime.Now;
                
                int difference = now.Year - birthDate.Year;
                if(now.Month < birthDate.Month || (now.Month == birthDate.Month && now.Day < birthDate.Day)) difference--;
                
                Console.WriteLine($"Você tem exatamente {difference} anos.");
                break;
                
             } catch (FormatException err){
                Console.WriteLine($"Entrada inválida de dados, digite números inteiros para ano, mês e dia.\nErro: {err.Message}");
                continue;
             } catch (ArgumentOutOfRangeException err){
                Console.WriteLine($"Data inválida.\nErro: {err.Message}");
                continue;
             } catch (ArgumentException err){
                Console.WriteLine($"Data inválida: {err.Message}");
                continue;
             }
        }
    }
}