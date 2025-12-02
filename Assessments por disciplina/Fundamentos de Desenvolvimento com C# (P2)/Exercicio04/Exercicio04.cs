using System.Globalization;

namespace Assessment.Exercicio04;

public class Exercicio04
{
    public static void Run()
    {
        Console.Write("Digite a sua data de aniversário (DD/MM/AAAA):\n> ");
        string userDate = Console.ReadLine();

        if (DateTime.TryParseExact(userDate, "dd/MM/yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime validDate))
        {
            DateTime now = DateTime.Now;
            DateTime nextBirthday = new DateTime(now.Year, validDate.Month, validDate.Day);

            if (nextBirthday < now)
            {
                nextBirthday = nextBirthday.AddYears(1);
            }

            TimeSpan difference = nextBirthday - now;

            string message = difference.Days <= 7 ? "Faltam menos de 7 dias para o seu aniversário! Parábens!" :
                $"Faltam {difference.Days} dias para o seu aniversário.";
            Console.WriteLine(message);
        }
        else
        {
            Console.WriteLine("Data inválida.");
        }
    }
}