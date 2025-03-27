namespace Assessment.Exercicio10
{
    internal class Exercicio10
    {
        public static void Run()
        {
            int randomNumber = new Random().Next(1, 51);
            int guessess = 1;
            while (true)
            {
                try
                {
                    while (guessess != 5)
                    {
                        Console.Write($"Adivinhe o número! Essa é a tentativa {guessess} de 5\nEntre 1 e 50, o número secreto é... > ");
                        int guess = int.Parse(Console.ReadLine());

                        Console.WriteLine();

                        if (guess == randomNumber)
                        {
                            Console.WriteLine($"Parabéns! Você acertou!\nO NÚMERO SECRETO ERA {randomNumber}\n");
                            break;
                        }

                        guessess++;
                        throw new WrongNumberException($"Seu palpite {guess} está errado...\n");
                    }
                }
                catch (WrongNumberException exception)
                {
                    Console.WriteLine(exception.Message);
                    continue;
                }
                catch (IOException e)
                {
                    Console.WriteLine("Digite um número válido\n");
                    continue;
                }

                Console.WriteLine($"Suas chances acabaram! O número secreto era {randomNumber}\n");
                break;
            }
            
        }
    }
}
