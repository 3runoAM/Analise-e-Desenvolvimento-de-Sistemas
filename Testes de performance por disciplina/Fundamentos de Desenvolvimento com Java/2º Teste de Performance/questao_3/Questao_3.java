package edu.infnet.tp2.questao_3;

import java.util.Scanner;

public class Questao_3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Questão 3"); //----------
        System.out.print("Qual valor, em reais, deseja converter?\n> ");
        double valueReais = Double.parseDouble(input.nextLine());

        System.out.print("Para qual moeda deseja converter?\n1 - Dólar\n2 - Euro\n3 - Libra Esterlina\n> ");
        String option = input.nextLine();

        input.close();

        switch (option) {
            case "1" -> {
                System.out.printf("R$ %.2f = $ %.2f\n", valueReais, valueReais / Taxes.DOLAR.getTAX());
            }
            case "2" -> {
                System.out.printf("R$ %.2f = € %.2f\n", valueReais, valueReais / Taxes.EURO.getTAX());
            }
            case "3" -> {
                System.out.printf("R$ %.2f = £ %.2f\n", valueReais, valueReais / Taxes.POUND.getTAX());
            }
            default -> {
                System.out.println("Opção inválida!");
            }
        }
    }
}