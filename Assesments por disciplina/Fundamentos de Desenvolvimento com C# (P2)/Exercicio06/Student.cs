namespace Assessment.Exercicio06;

public class Student
{
    private string _name;
    private string _registrationNumber;
    private string _courseName;
    private int _averageGrade;

    public Student(string name, string registrationNumber, string courseName, int averageGrade)
    {
        this._name = name;
        this._registrationNumber = registrationNumber;
        this._courseName = courseName;
        this._averageGrade = averageGrade;
    }

    public string GetStudentInfo()
    {
        return $"| Nome: {_name}" +
               $"\n|-------------" +
               $"\n| Número da matrícula: {_registrationNumber}" +
               $"\n| Nome do curso: {_courseName}" +
               $"\n| Média da disciplinas: {_averageGrade}";
    }

    public string VerifyApproval()
    {
        return IsApproved() ? $"O aluno está aprovado com média {_averageGrade}" : $"O aluno está reprovado. Média {_averageGrade}";
    }

    private bool IsApproved()
    {
        return _averageGrade >= 7.0;
    }
}