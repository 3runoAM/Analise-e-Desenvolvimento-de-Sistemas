namespace Assessment.Exercicio08
{
    internal class Employee
    {
        private string _name;
        private string _position;
        private double _grossSalary;

        public Employee(string name, string position, double grossSalary)
        {
            this._name = name;
            this._position = position;
            this._grossSalary = grossSalary;
        }

        public string GetEmpInfo()
        {
            return $"| Nome: {_name}\n| Cargo: {_position}\n| Salário Bruto: {_grossSalary}";
        }
    }
}
