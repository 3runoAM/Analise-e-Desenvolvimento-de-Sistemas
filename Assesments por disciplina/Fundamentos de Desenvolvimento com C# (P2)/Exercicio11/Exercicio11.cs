using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assessment.Exercicio11
{
    internal class Exercicio11
    {
        public static void Run()
        {
            if(!File.Exists("contatos.txt")) using (FileStream file = File.Create("contatos.txt")) { };

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

                Console.WriteLine("Contatos cadastrados: ");
                string line;
                while (!string.IsNullOrEmpty(line = reader.ReadLine()))
                {
                    string[] contact = line.Split(',');

                    Console.WriteLine($"\n Nome: {contact[0]} | Telefone: {contact[1]} | Email: {contact[2]}\n");
                }
            }
        }
    }
}
