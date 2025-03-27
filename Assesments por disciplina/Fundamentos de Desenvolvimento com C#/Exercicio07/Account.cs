using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assessment.Exercicio07
{
    internal class Account
    {
        public string ownerName;
        private double _balance;

        public Account(string ownerName, double balance)
        {
            this.ownerName = ownerName;
            this._balance = balance;
        }

        public string Deposit(double value)
        {
            return TryDeposit(value) ? $"Deposito de R$ {value} confirmado!" : "O valor do depósito deve ser positivo!";
        }

        private bool TryDeposit(double value)
        {
            if (value > 0)
            {
                _balance += value;
                return true;
            }
            return false;
        }

        public string Withdraw(double value)
        {
            return TryWithdraw(value) ? $"Saque de R$ {value} confirmado!" : "Saldo insuficiente para realizar o saque!";
        }

        private bool TryWithdraw(double value)
        {
            if (_balance > value)
            {
                _balance -= value;
                return true;
            }
            return false;
        }

        public string GetBalance()
        {
            return $"Saldo atual: R$ ${_balance}";
        }
    }
}
