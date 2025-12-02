namespace Assessment.Exercicio07
{
    internal class Exercicio07
    {
        public static void Run()
        {
            Account acc = new Account("João Silva", 1500.0);

            Console.WriteLine($"|Títular: {acc.ownerName}");
            Console.WriteLine($"|Saldo atual: R$ {acc.GetBalance()}\n");

            Console.WriteLine($"Depositando R$ 500...");
            Console.WriteLine(acc.Deposit(500.0));

            Console.WriteLine($"|Títular: {acc.ownerName}");
            Console.WriteLine($"|Saldo atual: R$ {acc.GetBalance()}\n");

            Console.WriteLine($"Tentativa de saque R$ 2500.00");
            Console.WriteLine(acc.Withdraw(2500.0));

            Console.WriteLine($"|Títular: {acc.ownerName}");
            Console.WriteLine($"|Saldo atual: R$ {acc.GetBalance()}\n");

            Console.WriteLine($"Tentativa de saque R$ 200.00");
            Console.WriteLine(acc.Withdraw(200.0));

            Console.WriteLine($"|Títular: {acc.ownerName}");
            Console.WriteLine($"|Saldo atual: R$ {acc.GetBalance()}\n");
        }
    }
}
