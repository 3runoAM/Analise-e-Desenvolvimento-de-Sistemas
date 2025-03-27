namespace TesteDePerformance2.questao_3;

public class Questao3{
    public static void Run(){
        while (true){
            try{
                Console.WriteLine("Digite o ano da primeira data: ");
                int year1 = int.Parse(Console.ReadLine());

                Console.WriteLine("Digite o mês da primeira data: ");
                int month1 = int.Parse(Console.ReadLine());

                Console.WriteLine("Digite o dia da primeira data: ");
                int day1 = int.Parse(Console.ReadLine());

                Console.WriteLine("Digite o ano da segunda data: ");
                int year2 = int.Parse(Console.ReadLine());

                Console.WriteLine("Digite o mês da segunda data: ");
                int month2 = int.Parse(Console.ReadLine());

                Console.WriteLine("Digite o dia da segunda data: ");
                int day2 = int.Parse(Console.ReadLine());

                DateTime date1 = new DateTime(year1, month1, day1);
                DateTime date2 = new DateTime(year2, month2, day2);

                TimeSpan difference = date2 - date1;
                int days = difference.Days;
                int months = (date2.Month - date1.Month) + 12 * (date2.Year - date1.Year);
                int years = date2.Year - date1.Year;

                Console.WriteLine($"A diferença entre as datas é de {years} anos, {months} meses e {days} dias.");
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