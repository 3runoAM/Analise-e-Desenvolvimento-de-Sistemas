package com.bam.sandcastlejava.edu.infnet.tp3.questoes_7_9;

public class Account {
    private String accountOwner;
    private int accountNumber;
    private String agency;
    private double balance;
    private String openingDate;

    public Account(String accountOwner, int accountNumber, String agency, double balance, String openingDate) {
        this.accountOwner = accountOwner;
        this.accountNumber = accountNumber;
        this.agency = agency;
        this.balance = balance;
        this.openingDate = openingDate;
    }

    public boolean withdraw(double value) {
        if (value > balance) {
            return false;
        }
        balance -= value;
        return true;
    }

    public void deposit(double value) {
        balance += value;
    }

    public double calculateInterest() {
        return balance * 0.01;
    }

    @Override
    public String toString() {
        return "Conta:\n\tTitular: %s\n\tNúmero da conta: %d\n\tAgência: %s\n\tSaldo: R$ %.2f\n\tData de abertura: %s\n".formatted(accountOwner, accountNumber, agency, balance, openingDate);
    }
}
