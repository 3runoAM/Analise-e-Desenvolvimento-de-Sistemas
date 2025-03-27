package Exercicio02;

import java.util.Scanner;

public class Questao02 {
    private static final String ONE_UPPERCASE_PATTERN = ".*[A-Z].*";
    private static final String ONE_DIGIT_PATTERN = ".*\\d.*";
    private static final String ONE_SPECIAL_CHAR_PATTERN = ".*[^a-zA-Z0-9].*";

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Digite seu nome de usuário:\n>");
        String username = input.nextLine();

        String password;
        while (true){
            try {
                System.out.print("""
                        \nDigite sua senha:
                        > Deve conter no mínimo 8 caracteres
                        > Deve conter no mínimo 1 letra maiúscula
                        > Deve conter no mínimo 1 número
                        > Deve conter no mínimo 1 caractere especial
                        \t>""");

                password = input.nextLine();

                validateLength(password);
                validateUppercaseLetter(password);
                validateDigit(password);
                validateSpecialChar(password);
            } catch (InvalidPassword e) {
                System.out.println("\n" + e.getMessage());
                continue;
            }
            System.out.println("Usuário cadastrado com sucesso!");
            break;
        }

        input.close();
    }

    private static void validateLength(String password) {
        if(password.length() < 8) throw new InvalidPassword("A senha deve conter no mínimo 8 caracteres.");
    }

    private static void validateUppercaseLetter(String password) {
        if(!password.matches(ONE_UPPERCASE_PATTERN)) throw new InvalidPassword("A senha deve conter no mínimo 1 letra maiúscula.");
    }

    private static void validateDigit(String password) {
        if(!password.matches(ONE_DIGIT_PATTERN)) throw new InvalidPassword("A senha deve conter no mínimo 1 número.");
    }

    private static void validateSpecialChar(String password) {
        if(!password.matches(ONE_SPECIAL_CHAR_PATTERN)) throw new InvalidPassword("A senha deve conter no mínimo 1 caractere especial.");
    }
}
