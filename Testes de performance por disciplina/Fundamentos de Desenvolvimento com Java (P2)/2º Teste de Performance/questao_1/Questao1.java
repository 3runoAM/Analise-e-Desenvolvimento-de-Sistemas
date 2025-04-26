package edu.infnet.tp2.questao_1;

import java.util.Scanner;

public class Questao1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Questão 1"); //----------
        System.out.print("Digite o nome da pessoa:\n>");
        String name = input.nextLine();

        System.out.print("Digite a idade da pessoa:\n>");
        int age = Integer.parseInt(input.nextLine());

        System.out.print("Digite o nome da mãe da pessoa:\n>");
        String motherName = input.nextLine();

        System.out.print("Digite o nome do pai da pessoa:\n>");
        String fatherName = input.nextLine();

        input.close();

        Person person = new Person(name, age, motherName, fatherName);

        System.out.println(person.getInformation());
        System.out.println(person.findLongestName());
    }
}