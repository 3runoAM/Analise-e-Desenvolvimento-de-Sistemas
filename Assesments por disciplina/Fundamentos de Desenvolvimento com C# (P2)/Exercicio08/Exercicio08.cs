namespace Assessment.Exercicio08
{
    internal class Exercicio08
    {
        public static void Run()
        {
            Employee emp = new Employee("João", "Developer", 5000.0);
            Console.WriteLine(emp.GetEmpInfo());

            Console.WriteLine();

            Manager manager = new Manager("Maria", "Manager", 5000.0);
            Console.WriteLine(manager.GetEmpInfo());
        }
    }
}