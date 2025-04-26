namespace TesteDePerformance3.questoes_07_09;

public class UniversityRegistration{
    private string _studentName;
    private string _course;
    private int _registrationNumber;
    private string _status;
    private string _registrationDate;

    public UniversityRegistration(string studentName, string course, int registrationNumber, string status, string registrationDate){
        _studentName = studentName;
        _course = course;
        _registrationNumber = registrationNumber;
        _status = status;
        _registrationDate = registrationDate;
    }

    public string StudentName => _studentName;

    public string Course => _course;

    public int RegistrationNumber => _registrationNumber;

    public string Status => _status;

    public string RegistrationDate => _registrationDate;
    
    public void SetSuspendedStatus(){
        _status = "Trancado";
    }
    
    public void SetActiveStatus(){
        _status = "Ativa";
    }

    public string GetRegistrationInfo(){
        return $"Nome: {_studentName}\n\tCurso: {_course}\n\tSituação da Matrícula: {_status}\n\tData de matrícula: {_registrationDate}\n";
    }
}