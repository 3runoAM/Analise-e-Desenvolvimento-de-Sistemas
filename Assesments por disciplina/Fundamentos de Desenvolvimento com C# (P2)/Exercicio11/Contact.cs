namespace Assessment.Exercicio11
{
    internal class Contact
    {
        private string _name;
        private string _phone;
        private string _email;

        public Contact(string name, string phone, string email)
        {
            _name = name;
            _phone = phone;
            _email = email;
        }

        public string GetContactInfo()
        {
            return $"| Nome: {_name} | Telefone: {_phone} | Email: {_email}";
        }

        public string GetCSVInfo()
        {
            return $"{_name},{_phone},{_email}";
        }
    }
}
