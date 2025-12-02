package Questao11;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Questao11 {
    private static final Logger logger = Logger.getLogger(Questao11.class.getName());
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        List<Integer> randomNumbers = new ArrayList<>();
        List<Integer> userGuesses = new ArrayList<>();

        for (int i = 0; i < 6; i++) {
            randomNumbers.add((int) (Math.random() * 60) + 1);
        }

        logger.log(Level.INFO, "Números sorteados: {0}", randomNumbers);

        for (int i = 0; i < 6; i++) {
            System.out.printf("Digite um número entre 1 e 60.\n%dº número: ", i+1);
            userGuesses.add(Integer.parseInt(input.nextLine()));
        }

        int correctGuesses = 0;
        for(var num : userGuesses) {
            if(randomNumbers.contains(num)) {
                correctGuesses++;
            }
        }

        System.out.println("Números sorteados: " + randomNumbers);
        System.out.println("Números escolhidos: " + userGuesses);
        System.out.println("Concertos: " + correctGuesses);
    }
}
