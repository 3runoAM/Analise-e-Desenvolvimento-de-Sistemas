package edu.infnet.tp2.questao_5;

import java.util.Scanner;

public class Questao_5 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Questão 5"); //----------
        System.out.println("Digite o valor da compra: ");
        double purchaseValue = Double.parseDouble(input.nextLine());

        input.close();

        double total = purchaseValue;
        String desconto = "Nenhum desconto :(";
        if (purchaseValue >= 1000d){
            total = purchaseValue - (purchaseValue * 0.1);
            desconto = "Desconto de 10%! :D";
        } else if (purchaseValue >= 500d) {
            total = purchaseValue - (purchaseValue * 0.05);
            desconto = "Desconto de 5%! :)";
        }

        System.out.printf("Valor da compra: R$ %.2f\n", purchaseValue);
        System.out.println(desconto);
        System.out.printf("Valor total: R$ %.2f\n", total);
    }
}
