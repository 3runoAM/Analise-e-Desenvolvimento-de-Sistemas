using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assessment.Exercicio12
{
    internal class MarkdownFormatter : ContactFormatter
    {
        public override void ShowContacts(List<Contact> contacts)
        {
            Console.WriteLine("## Lista de Contatos");
            foreach (Contact contact in contacts)
            {
                Console.WriteLine($"- **Nome:** {contact.Name}");
                Console.WriteLine($"- 📞 Telefone:  {contact.Phone}");
                Console.WriteLine($"- 📧 Email: {contact.Email}");
            }
        }
    }
}
