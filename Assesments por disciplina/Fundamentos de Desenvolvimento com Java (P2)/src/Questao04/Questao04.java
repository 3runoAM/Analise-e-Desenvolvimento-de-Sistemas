package Questao04;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Scanner;

public class Questao04 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Digite o seu nome:\n>");
        String name = input.nextLine();

        System.out.print("Digite o valor do empréstimo:\n>");
        BigDecimal loan = new BigDecimal(input.nextLine());

        int installments;
        do {
            System.out.println("Digite o número de parcelas (mínimo 6, máximo 48):");
            installments = Integer.parseInt(input.nextLine());
        } while (installments < 1 || installments > 48);

        BigDecimal installmentsValue = loan.divide(new BigDecimal(installments), 2, RoundingMode.HALF_UP);

        installmentsValue = installmentsValue.add(installmentsValue.multiply(new BigDecimal("0.03")));
        BigDecimal totalValue = installmentsValue.multiply(new BigDecimal(installments));

        System.out.printf("| Olá! %s\n", name);
        System.out.printf("| Empréstimo de %.2f em %d parcelas", loan, installments);
        System.out.print(", com juros mensal fixo de 3%.\n");
        System.out.printf("| Parcelas de %.2f.\n| Valor total: %.2f", installmentsValue, totalValue);
    }
}
