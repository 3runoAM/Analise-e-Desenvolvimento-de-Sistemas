package edu.infnet.tp2.questao_2;

import java.util.Scanner;

public class Questao2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Questão 2"); //----------
        System.out.print("Digite a primeira nota:\n> ");
        double grade1 = Double.parseDouble(input.nextLine());

        System.out.print("Digite a segunda nota:\n> ");
        double grade2 = Double.parseDouble(input.nextLine());

        System.out.print("Digite a terceira nota:\n> ");
        double grade3 = Double.parseDouble(input.nextLine());

        System.out.print("Digite a quarta nota:\n> ");
        double grade4 = Double.parseDouble(input.nextLine());

        input.close();

        double average = calculateAverage(new double[] {grade1, grade2, grade3, grade4});

        System.out.printf("A média das notas é: %.2f\n", average);
        System.out.printf("Resultado: %s", getResult(average));
    }

    public static double calculateAverage(double[] grades) {
        double sum = 0;
        for(var grade : grades) {
            sum += grade;
        }
        return sum / grades.length;
    }

    public static String getResult(double average) {
        if (average >= 7) {
            return "Aprovado";
        } else if (average >= 5) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }
}