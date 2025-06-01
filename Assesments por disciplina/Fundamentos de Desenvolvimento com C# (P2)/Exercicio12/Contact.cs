namespace Assessment.Exercicio12
{
    public class Contact
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

        public string Name
        {
            get { return _name; }
        }

        public string Phone
        {
            get { return _phone; }
        }

        public string Email
        {
            get { return _email; }
        }
    }
}