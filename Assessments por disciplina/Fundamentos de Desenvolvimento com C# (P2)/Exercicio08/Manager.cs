
namespace Assessment.Exercicio08
{
    internal class Manager : Employee
    {
        private double _salary;

        public Manager(string name, string position, double grossSalary) : base(name, position, grossSalary)
        {
            this._salary = grossSalary * 0.2;
        }

        public override string ToString()
        {
            return base.GetEmpInfo() + $"\n| Salário Líquido: {this._salary}";
        }
    }
}
