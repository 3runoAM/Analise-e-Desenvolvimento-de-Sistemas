using System.Globalization;
using System.Text;

namespace Assessment.Exercicio05;

public class Exercicio05
{
    private static DateTime _graduationDay = new DateTime(2026, 12, 15);
    public static void Run()
    {
        Console.Write("Digite a data atual (dd/MM/yyyy):\n> ");
        string currentDate = Console.ReadLine();

        if (DateTime.TryParseExact(currentDate, "dd/MM/yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime usersNow))
        {
            if (usersNow > DateTime.Now)
            {
                Console.WriteLine("Erro: A data informada não pode ser no futuro!");
                return;
            }
            if (_graduationDay > usersNow)
            {
                Console.WriteLine(GetTimeToGraduation(usersNow));
                return;
            }
            Console.WriteLine("Parabéns! Você já deveria estar formado!");
        }
        else
        {
            Console.WriteLine("Data inválida.");
        }
    }

    public static string GetTimeToGraduation(DateTime usersNow)
    {
        int years = _graduationDay.Year - usersNow.Year;
        int months = _graduationDay.Month - usersNow.Month;
        int days = _graduationDay.Day - usersNow.Day;

        if (days < 0)
        {
            months--;
            days += DateTime.DaysInMonth(usersNow.Year, months);
        }
        if (months < 0)
        {
            years--;
            months += 12;
        }

        return BuildMessage(years, months, days);
    }

    private static string BuildMessage(int years, int months, int days)
    {
        StringBuilder finalMessage = new StringBuilder();
        finalMessage.Append("Faltam ");
        if (years > 0)
        {
            finalMessage.Append($"{years} ano(s), ");
        }
        if (months > 0)
        {
            finalMessage.Append($"{months} mês(es), ");
        }
        if (days > 0)
        {
            finalMessage.Append($"{days} dia(s) ");
        }
        finalMessage.Append(months <= 6 && years == 0 ? "para a sua formatura!\n!A reta final chegou! Prepare-se para a formatura!"
            : "para a sua formatura!");

        return finalMessage.ToString();
    }
}