using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assessment.Exercicio12
{
    internal class TableFormatter : ContactFormatter
    {
        public override void ShowContacts(List<Contact> contacts)
        {
            Console.WriteLine("----------------------------------------");
            Console.WriteLine("| Nome | Telefone | Email |");
            Console.WriteLine("----------------------------------------");
            foreach (Contact contact in contacts)
            {
                Console.WriteLine($"| {contact.Name} | {contact.Phone} | {contact.Email} |");
            }
            Console.WriteLine("----------------------------------------");
        }
    }
}
