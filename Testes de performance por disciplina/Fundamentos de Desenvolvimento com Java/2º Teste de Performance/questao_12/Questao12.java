package edu.infnet.tp2.questao_12;

import java.util.Scanner;

public class Questao12 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Digite uma phrase: ");
        String phrase = input.nextLine();

        int count = 0;
        for (var word : phrase.split(" ")) {
            count += word.length();
        }

        System.out.printf("A phrase: \"%s\" tem %d caracteres.\n", phrase, count);
    }
}
