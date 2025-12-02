package Questao12;

import java.util.Scanner;

public class Questao12 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String[] messages = new String[10];

        System.out.print("Digite o nome do primeiro usuário\n> ");
        String userA = input.nextLine();

        System.out.print("Digite o nome do segundo usuário\n> ");
        String userB = input.nextLine();

        for (int i = 1; i < 11; i++) {
            if (i % 2 != 0) {
                System.out.printf("%s, digite sua mensagem:\n> ", userA);
                messages[i-1] = input.nextLine();
            } else {
                System.out.printf("%s, digite sua mensagem:\n> ", userB);
                messages[i-1] = input.nextLine();
            }
        }

        System.out.println("===== Histórico de Mensagens =====");
        for (int i = 1; i < 11; i++) {
            if (i % 2 != 0) {
                System.out.printf("%s: %s\n", userA, messages[i-1]);
            } else {
                System.out.printf("%s: %s\n", userB, messages[i-1]);
            }
        }
    }
}
