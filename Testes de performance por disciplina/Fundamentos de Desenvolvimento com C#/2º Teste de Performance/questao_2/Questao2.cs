namespace TesteDePerformance2.questao_2;

public class Questao2{
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
                DateTime nextBirthday;
                if(now.Month > birthDate.Month || (now.Month == birthDate.Month && now.Day > birthDate.Day)){
                    nextBirthday = new DateTime(now.Year + 1, birthDate.Month, birthDate.Day);
                } else {
                    nextBirthday = new DateTime(now.Year, birthDate.Month, birthDate.Day);
                }
                
                TimeSpan difference = nextBirthday - now;
                int daysUntilBirthday = difference.Days;
                
                Console.WriteLine($"Faltam exatamente {daysUntilBirthday} dias para o seu próximo aniversário.");
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