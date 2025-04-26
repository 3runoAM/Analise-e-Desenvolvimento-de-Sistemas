package edu.infnet.tp2.questao_6;

import java.util.Scanner;

public class Questao6 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Questão 6"); //----------

        int year;
        do {
            System.out.println("Digite um ano para saber se ele é bissexto: ");
            year = Integer.parseInt(input.nextLine());
        } while (year <= 0);

        input.close();

        if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {
            System.out.printf("%d é ano bissexto!", year);
        } else {
            System.out.printf("%d não é ano bissexto!", year);
        }
    }
}
