using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assessment.Exercicio10
{
    internal class WrongNumberException : Exception
    {
        public WrongNumberException(string message) : base(message) { }
    }
}
