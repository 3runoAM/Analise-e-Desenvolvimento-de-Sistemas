namespace TestePerformance1.Exercicio01;

public class DiscountCalculator
{
    private delegate decimal CalculateDiscount(decimal price);
    public static void Run()
    {
        CalculateDiscount calculateDiscount = TenPercent;
        Console.Write("Digite o preço original do produto: R$");
        string price = Console.ReadLine();
        
        if (decimal.TryParse(price, out decimal originalPrice)){ 
            Console.WriteLine($"O preço (${originalPrice}) com desconto de 10% é: R${calculateDiscount(originalPrice):F2}");
        }
        else{
            Console.WriteLine("Valor inválido: preço deve ser um número decimal.");
        }
    }
    
    private static decimal TenPercent(decimal price){
        return price - (price * 0.1m);
    }
}