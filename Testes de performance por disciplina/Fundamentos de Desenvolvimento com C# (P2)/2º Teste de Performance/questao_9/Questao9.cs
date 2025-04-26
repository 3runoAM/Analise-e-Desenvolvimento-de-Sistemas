namespace TesteDePerformance2.questao_9;

public class Questao9{
    public static void Run(){
        double IRDiscount;
        Console.WriteLine("Digite o salário bruto: ");
        double grossSalary = double.Parse(Console.ReadLine());

        if (grossSalary <= 1903.98){
            IRDiscount = 0;
        } else if (grossSalary <= 2826.65){
            IRDiscount = grossSalary * 0.075;
        } else if (grossSalary <= 3751.05){
            IRDiscount = grossSalary * 0.15;
        } else if (grossSalary <= 4664.68){
            IRDiscount = grossSalary * 0.225;
        } else{
            IRDiscount = grossSalary * 0.275;
        }

        double netSalary = grossSalary - IRDiscount;

        Console.WriteLine("Salário Bruto: R$ " + grossSalary);
        Console.WriteLine("Desconto IR: R$ " + IRDiscount);
        Console.WriteLine("Salário Líquido: R$ " + netSalary);
    }
}