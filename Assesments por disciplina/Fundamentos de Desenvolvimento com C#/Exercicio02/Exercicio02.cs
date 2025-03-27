namespace Assessment.Exercicio02;

public class Exercicio02
{
    public static void Run()
    {
        Console.Write("Digite o seu nome:\n> ");
        string[] name = Console.ReadLine().Split(" ");

        string newName = "";
        foreach (string word in name)
        {
            string newWord = "";
            foreach (char c in word)
            {
                newWord += (char)(c + 2);
            }
            newName += newWord + " ";
        }
        newName = newName.Trim();

        Console.WriteLine(newName);
    }
}