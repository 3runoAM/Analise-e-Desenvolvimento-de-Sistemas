namespace Assessment.Exercicio09
{
    internal class Exercicio09
    {
        private static int _inventoryCount;
        public static void Run()
        {
            if (!File.Exists("estoque.txt")) using (FileStream file = File.Create("estoque.txt")){ };

            string option = "";
            while (option != "3")
            {
                try
                {
                    _inventoryCount = CountProducts();
                    Console.Write("\nOlá! Vamos trabalhar com produtos?\n\t1- Inserir Produto\n\t2- Listar Produtos\n\t3- Sair\n> ");
                    option = Console.ReadLine();

                    switch (option)
                    {
                        case "1":
                            InsertProduct();
                            break;
                        case "2":
                            ListProducts();
                            break;
                        case "3":
                            Console.WriteLine("| Até mais! --------------");
                            break;
                        default:
                            Console.WriteLine("| Opção não existe no menu.");
                            break;
                    }
                }
                catch (FormatException ex)
                { 
                    Console.WriteLine("ERRO: Entrada inválida. " + ex.ToString());
                    continue;
                }
                catch (ArgumentException ex)
                {
                    Console.WriteLine("ERRO: Entrada inválida. " + ex.ToString());
                    continue;
                }
                catch (IOException ex)
                {
                    Console.WriteLine("ERRO: Entrada inválida ou arquivo corrompido. " + ex.ToString());
                    continue;
                }
            }
        }

        private static void InsertProduct()
        {
            Console.WriteLine($"\n| Nosso estoque possui {_inventoryCount} produto(s) no momento.\n");
            if (_inventoryCount < 5)
            {
                Product currentProduct = CreateProduct();

                using (StreamWriter writter = new StreamWriter("estoque.txt", true))
                {
                    writter.WriteLine(currentProduct.GetCSVInfo());
                }

                Console.WriteLine("\n| Produto inserido com sucesso!");
                Console.WriteLine(currentProduct.GetProductInfo());
                return;
            }

            Console.WriteLine("\n| Limite de produtos atingido!");
            return;
        }

        private static Product CreateProduct()
        {
            Console.Write("\nDigite o nome do produto: ");
            string name = Console.ReadLine();

            Console.Write("\nDigite a quantidade do produto: ");
            int quantity = int.Parse(Console.ReadLine());

            Console.Write("\nDigite o preço do produto: R$ ");
            double price = double.Parse(Console.ReadLine());

            return new Product(name, quantity, price);
        }

        private static int CountProducts()
        {
            int lineCount = 0;
            using (StreamReader reader = new StreamReader("estoque.txt"))
            {
                string line;
                while (!string.IsNullOrEmpty((line = reader.ReadLine())))
                {
                    lineCount++;
                }
            }

            return lineCount;
        }

        private static void ListProducts()
        { 
            if(_inventoryCount == 0)
            {
                Console.WriteLine("| Nenhum produto cadastrado.");
                return;
            }

            Console.WriteLine($"\n| Temos {_inventoryCount} produtos no estoque");
            using (StreamReader reader = new StreamReader("estoque.txt"))
            {
                string line;
                while (!string.IsNullOrEmpty((line = reader.ReadLine())))
                {
                    Console.WriteLine($"\n| {line}");
                }
            }
        }
    }
}
