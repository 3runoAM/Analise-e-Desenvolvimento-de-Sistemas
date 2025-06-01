using System.Reflection.PortableExecutable;
using Assessment.Exercicio12;

namespace Assessment.Exercicio12
{
    internal class Exercicio12
    {
        public static void Main()
        {
            if (!File.Exists("contatos.txt")) using (FileStream file = File.Create("contatos.txt")) { };

            string option = "";
            while (option != "3")
            {
                try
                {
                    Console.Write("=== Gerenciador de Contatos ===\n1 - Adicionar novo contato\n2 - Listar contatos cadastrados\n3 - Sair\n> ");
                    option = Console.ReadLine();

                    switch (option)
                    {
                        case "1":
                            AddContact();
                            break;
                        case "2":
                            ListContacts();
                            break;
                        case "3":
                            Console.WriteLine("\n| Encerrando programa...");
                            break;
                        default:
                            Console.WriteLine("\n| Opção inválida.");
                            break;
                    }
                }
                catch (IOException ex)
                {
                    Console.WriteLine("Erro de leitura/escrita: " + ex.ToString());
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
            }
        }

        private static void AddContact()
        {
            Contact newContact = CreateContact();
            using (StreamWriter writter = new StreamWriter("contatos.txt", true))
            {
                writter.WriteLine(newContact.GetCSVInfo());
                Console.WriteLine("\n| Contato cadastrado com sucesso!");

                Console.WriteLine(newContact.GetContactInfo());
            }
        }

        private static Contact CreateContact()
        {
            Console.WriteLine("\nDigite o nome do contato:");
            string name = Console.ReadLine();

            Console.WriteLine("\nDigite o telefone do contato:");
            string phone = Console.ReadLine();

            Console.WriteLine("\nDigite o email do contato:");
            string email = Console.ReadLine();

            return new Contact(name, phone, email);
        }

        private static void ListContacts()
        {
            using (StreamReader reader = new StreamReader("contatos.txt"))
            {
                if (reader.Peek() == -1)
                {
                    Console.WriteLine("\n| Nenhum contato cadastrado.\n");
                    return;
                }

                List<Contact> contacts = GetContacts(reader);

                Console.Write("\n | Em qual formato deseja exibir os contatos?\n1- Markdown\n2- Tabela\n3- Texto Puro\n> ");
                string option = Console.ReadLine();

                switch (option) 
                {
                    case "1":
                        MarkdownFormatter markdowFormatter = new MarkdownFormatter();
                        markdowFormatter.ShowContacts(contacts);
                        break;
                    case "2":
                        TableFormatter tableFormatter = new TableFormatter();
                        tableFormatter.ShowContacts(contacts);
                        break;
                    case "3":
                        RawTextFormatter rawTextFormatter = new RawTextFormatter();
                        rawTextFormatter.ShowContacts(contacts);
                        break;
                    default:
                        Console.WriteLine("\n| Opção inválida.");
                        break;
                }
            }
        }

        private static List<Contact> GetContacts(StreamReader reader) 
        {
            List<Contact> agenda = new List<Contact>();
            string line;
            while (!string.IsNullOrEmpty(line = reader.ReadLine()))
            {
                string[] contact = line.Split(',');
                agenda.Add(new Contact(contact[0], contact[1], contact[2]));
            }
            return agenda;
        }
    }
}
