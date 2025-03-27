package Questao09;

public class Account {
    private String owner;
    private double balance;

    public Account(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    public String getOwner() {
        return owner;
    }

    // SERIA ESSE O "EXIBIR SALDO" PEDIDO NA QUESTÃO
    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public String withdraw(double amount) {
        return tryWithdraw(amount) ? "| Saque de R$%.2f realizado com sucesso!".formatted(amount) :
                "| Saldo insuficiente! Montante disponível: %.2f".formatted(balance);
    }

    private boolean tryWithdraw(double amount) {
        if (amount > balance) {
            return false;
        } else {
            balance -= amount;
            return true;
        }
    }
}
