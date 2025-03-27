package Questao07;

import java.util.Scanner;

public class Questao07 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite o nome do aluno: ");
        String name = input.nextLine();

        System.out.println("Digite a matrícula do aluno: ");
        String registration = input.nextLine();

        System.out.println("Digite a primeira nota do aluno: ");
        double gradeA = Double.parseDouble(input.nextLine());

        System.out.println("Digite a segunda nota do aluno: ");
        double gradeB = Double.parseDouble(input.nextLine());

        System.out.println("Digite a terceira nota do aluno: ");
        double gradeC = Double.parseDouble(input.nextLine());

        Student student = new Student(name, registration, gradeA, gradeB, gradeC);
        System.out.printf("Aluno %s: %s", name, student.isApproved());

        input.close();
    }
}
