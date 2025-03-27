package edu.infnet.tp2.questao_4;

import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class Questao4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Questão 4"); //----------
        while (true) {
            try {
            System.out.print("Digite o ano de nascimento:\n> ");
            int year = Integer.parseInt(input.nextLine());

            System.out.print("Digite o mês de nascimento :\n> ");
            int month = Integer.parseInt(input.nextLine());

            System.out.print("Digite o dia de nascimento:\n> ");
            int day= Integer.parseInt(input.nextLine());

            LocalDate birthDate = LocalDate.of(year, month, day);
            LocalDate todayDate = LocalDate.now();

            System.out.printf("\nVocê já viveu %d dias!", ChronoUnit.DAYS.between(birthDate, todayDate));
            break;
            } catch (DateTimeException e ){
                System.out.println("Data inválida!");
                System.out.println(e.getMessage());
            } catch (NumberFormatException e) {
                System.out.println("Valor inválido!");
                System.out.println(e.getMessage());
            }
        }
        input.close();
    }
}
