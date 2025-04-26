package edu.infnet.tp2.questao_11;

import java.util.Scanner;

public class Questao11 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Digite o valor inicial: ");
        int initialValue = Integer.parseInt(input.nextLine());

        System.out.print("Digite o valor de incremento: ");
        int incrementValue = Integer.parseInt(input.nextLine());

        input.close();

        while (initialValue <= 100) {
            System.out.printf("%d + %d = %d\n", initialValue, incrementValue, initialValue + incrementValue);
            initialValue += incrementValue;
        }
    }
}
