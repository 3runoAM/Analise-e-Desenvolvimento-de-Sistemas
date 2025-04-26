package edu.infnet.tp2.questao_10;

import java.util.Scanner;

public class Questao10 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int randomInt = (int)(Math.random() * 100) + 1;
        while (true){
            System.out.print("Adivinhe o número secreto (entre 1 e 100):\n>");
            int guess = Integer.parseInt(input.nextLine());

            if (guess == randomInt) {
                System.out.printf("Parabéns, você acertou! o Número secreto é %d\n", randomInt);
                break;
            } else if (guess < randomInt) {
                System.out.println("O número secreto é maior.");
            } else {
                System.out.println("O número secreto é menor.");
            }
        }

        input.close();
    }
}
