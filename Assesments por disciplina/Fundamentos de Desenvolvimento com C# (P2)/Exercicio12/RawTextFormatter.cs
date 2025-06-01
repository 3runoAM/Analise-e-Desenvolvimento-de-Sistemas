using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assessment.Exercicio12
{
    internal class RawTextFormatter : ContactFormatter
    {
        public override void ShowContacts(List<Contact> contacts)
        {
            foreach (Contact contact in contacts) 
            {
                Console.WriteLine(contact.GetContactInfo());
            }
        }
    }
}
