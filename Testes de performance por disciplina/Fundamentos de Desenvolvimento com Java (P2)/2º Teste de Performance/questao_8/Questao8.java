package edu.infnet.tp2.questao_8;

import java.util.Scanner;

public class Questao8 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Digite o valor do lado A: ");
        int sideA =  Integer.parseInt(input.nextLine());

        System.out.println("Digite o valor do lado B: ");
        int sideB =  Integer.parseInt(input.nextLine());

        System.out.println("Digite o valor do lado C: ");
        int sideC =  Integer.parseInt(input.nextLine());

        input.close();

        if(isValidTriangle(sideA, sideB, sideC)) {
            System.out.printf("%d, %d e %d formam: %s", sideA, sideB, sideC, determineTriangleType(sideA, sideB, sideC));
        } else {
            System.out.printf("%d, %d, %d não formam um triângulo válido.", sideA, sideB, sideC);
        }
    }

    public static boolean isValidTriangle(int sideA, int sideB, int sideC) {
        return (sideA + sideB) > sideC && (sideA + sideC) > sideB && (sideB + sideC) > sideA;
    }

    public static String determineTriangleType(int sideA, int sideB, int sideC) {
        if (sideA == sideB && sideB == sideC) {
            return "Triângulo Equilátero";
        } else if (sideA != sideB && sideB != sideC && sideA != sideC) {
            return "Triângulo Escaleno";
        } else {
            return "Triângulo Isóceles";
        }
    }
}
