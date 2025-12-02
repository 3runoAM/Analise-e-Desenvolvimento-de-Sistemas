using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assessment.Exercicio09
{
    internal class Product
    {
        private string _name;
        private int _quantity;
        private double _price;

        public Product(string name, int quantity, double price)
        {
            _name = name;
            _quantity = quantity;
            _price = price;
        }

        public string Name { get; }

        public int Quantity { get; }

        public double Price { get; }

        public double GetTotalValue()
        {
            return (double)_quantity * _price;
        }

        public string GetProductInfo()
        {
            return $"| Produto: {_name} | Quantidade: {_quantity} | Preço: R$ {_price}";
        }

        public string GetCSVInfo()
        {
            return $"{_name},{_quantity},{_price}";
        }
    }
}
