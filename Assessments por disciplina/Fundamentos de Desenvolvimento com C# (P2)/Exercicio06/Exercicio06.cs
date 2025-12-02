namespace Assessment.Exercicio06;

public class Exercicio06
{
    public static void Run()
    {
        Student st1 = new Student("Martinha", "fin-4645345353FSHI", "Finanças", 6);
        Console.WriteLine(st1.GetStudentInfo());
        Console.WriteLine(st1.VerifyApproval());

        Console.WriteLine("\n\n");

        Student st2 = new Student("João", "adm-4645345353FSHI", "Administração", 7);
        Console.WriteLine(st2.GetStudentInfo());
        Console.WriteLine(st2.VerifyApproval());
    }
}