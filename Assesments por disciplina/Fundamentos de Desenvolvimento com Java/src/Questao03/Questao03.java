package Questao03;

import java.math.BigDecimal;
import java.util.Scanner;

public class Questao03 {
    private static final BigDecimal TAX_FREE = new BigDecimal("22847.76");
    private static final BigDecimal TAX_1 = new BigDecimal("33919.80");
    private static final BigDecimal TAX_2 = new BigDecimal("45012.60");
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Digite o seu nome:\n>");
        String name = input.nextLine();

        System.out.print("\nDigite o salário mensal:\n>");
        BigDecimal salary = new BigDecimal(input.nextLine());

        salary = salary.multiply(new BigDecimal(12));

        System.out.println("| " + name);
        System.out.printf("| Salário bruto anual: %.2f\n", salary);

        BigDecimal tax;
        if (salary.compareTo(TAX_FREE) <= 0) {
            System.out.println("| Isento de impostos.");
            System.out.printf("| Salário Líquido: %.2f\n", salary);
        } else if(salary.compareTo(TAX_1) <= 0) {
            tax = salary.multiply(new BigDecimal("0.075"));

            System.out.println("| Desconto de 7.5%");
            System.out.printf("| Imposto total: %.2f\n", tax);
            System.out.printf("| Salário Líquido: %.2f", salary.subtract(tax));
        } else if (salary.compareTo(TAX_2) <= 0) {
            tax = salary.multiply(new BigDecimal("0.15"));

            System.out.println("| Imposto de 15%");
            System.out.printf("| Imposto total: %.2f\n", tax);
            System.out.printf("| Salário Líquido: %.2f", salary.subtract(tax));
        } else {
            tax = salary.multiply(new BigDecimal("0.275"));

            System.out.println("| Imposto de 27.5%");
            System.out.printf("| Imposto total: %.2f\n", tax);
            System.out.printf("| Salário Líquido: %.2f", salary.subtract(tax));
        }

        input.close();
    }
}