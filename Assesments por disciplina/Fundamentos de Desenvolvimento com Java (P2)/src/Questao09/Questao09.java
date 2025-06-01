package Questao09;

public class Questao09 {
    public static void main(String[] args) {
        Account acc = new Account("Germano", 1000);

        System.out.printf("| Titular: %s\n", acc.getOwner());
        System.out.printf("| Saldo:  R$%.2f\n", acc.getBalance());

        System.out.println("\nDepósito de R$500...");
        acc.deposit(500);

        System.out.printf("| Titular: %s\n", acc.getOwner());
        System.out.printf("| Saldo:  R$%.2f\n", acc.getBalance());

        System.out.println("\nSaque de  R$2000 (acima do valor disponível)...");
        System.out.println(acc.withdraw(2000));

        System.out.println("\nSaque de 1000 (dentro do valor disponível)...");
        System.out.println(acc.withdraw(1000));

        System.out.printf("| Titular: %s\n", acc.getOwner());
        System.out.printf("| Saldo:  R$%.2f\n", acc.getBalance());
    }
}