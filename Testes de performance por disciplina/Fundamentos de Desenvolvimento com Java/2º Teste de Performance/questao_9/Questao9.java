package edu.infnet.tp2.questao_9;

import java.util.Scanner;

public class Questao9 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite a senha: ");
        long password = Long.parseLong(input.nextLine());;
        long repeatedPassword;
        do {
            System.out.println("Digite a senha novamente: ");
            repeatedPassword = Long.parseLong(input.nextLine());
        } while (repeatedPassword != password);

        System.out.println("Senha correta.");

        input.close();
    }
}