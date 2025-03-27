package edu.infnet.tp2.questao_7;

import java.math.BigDecimal;
import java.util.Scanner;

public class Questao7 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Questão 7"); //----------

        System.out.print("Digite o salário bruto:\n> R$ ");
        BigDecimal salary = new BigDecimal(input.nextLine());

        input.close();
        System.out.print("| Resultado:");
        BigDecimal taxToPay = calculateTaxes(salary);

        System.out.println("\n| Valores totais:");
        System.out.printf("|\tSalário bruto: R$ %.2f\n", salary);
        System.out.printf("|\tImposto a pagar: R$ %.2f\n", taxToPay);
        System.out.printf("|\tSalário líquido: R$ %.2f\n", salary.subtract(taxToPay));
    }

    private static BigDecimal calculateTaxes(BigDecimal salary) {
        BigDecimal totalTaxes = BigDecimal.ZERO;
        BigDecimal taxInTier;
        BigDecimal remainingSalary = salary;

        if (salary.compareTo(SalaryTier.TIER_0.getSalary()) <= 0) {
            System.out.println("|\tIsento de imposto");
            return totalTaxes;
        }

        if (salary.compareTo(SalaryTier.TIER_0.getSalary()) > 0) {
            System.out.println("\n|\tParte da renda cai na faixa 1");
            remainingSalary = remainingSalary.subtract(SalaryTier.TIER_0.getSalary());

            if (remainingSalary.compareTo(SalaryTier.TIER_1.getTaxableIncome()) > 0) {
                taxInTier = SalaryTier.TIER_1.getTaxableIncome().multiply(TaxTier.TIER_1.getTax());
                totalTaxes = totalTaxes.add(taxInTier);

                System.out.printf("| Renda total dentro da faixa 1: %.2f \n", SalaryTier.TIER_1.getTaxableIncome());
                System.out.printf("| Valor do imposto nessa faixa: %.2f \n", taxInTier);
                System.out.printf("| Imposto acumulado até o momento: %.2f \n", totalTaxes);
            } else {
                taxInTier = remainingSalary.multiply(TaxTier.TIER_1.getTax());
                totalTaxes = totalTaxes.add(taxInTier);

                System.out.printf("| Renda na faixa 1: %.2f\n", remainingSalary);
                System.out.printf("| Valor do imposto nessa faixa: %.2f\n", taxInTier);
                System.out.printf("| Imposto acumulado até o momento: %.2f\n", totalTaxes);
                return totalTaxes;
            }
        }

        if (salary.compareTo(SalaryTier.TIER_1.getSalary()) > 0) {
            System.out.println("\n|\tParte da renda cai na faixa 2");
            remainingSalary = remainingSalary.subtract(SalaryTier.TIER_1.getTaxableIncome());

            if (remainingSalary.compareTo(SalaryTier.TIER_2.getTaxableIncome()) > 0) {
                taxInTier = SalaryTier.TIER_2.getTaxableIncome().multiply(TaxTier.TIER_2.getTax());
                totalTaxes = totalTaxes.add(taxInTier);

                System.out.printf("| Renda total dentro da faixa 2: %.2f\n", SalaryTier.TIER_2.getTaxableIncome());
                System.out.printf("| Valor do imposto nessa faixa: %.2f\n", taxInTier);
                System.out.printf("| Imposto acumulado até o momento: %.2f\n", totalTaxes);
            } else {
                taxInTier = remainingSalary.multiply(TaxTier.TIER_2.getTax());
                totalTaxes = totalTaxes.add(taxInTier);

                System.out.printf("| Renda na faixa 2: %.2f\n", remainingSalary);
                System.out.printf("| Valor do imposto nessa faixa: %.2f\n", taxInTier);
                System.out.printf("| Imposto acumulado até o momento: %.2f\n", totalTaxes);

                return totalTaxes;
            }
        }
        if (salary.compareTo(SalaryTier.TIER_2.getSalary()) > 0) {
            System.out.println("\n|\tParte da renda cai na faixa 3");
            remainingSalary = remainingSalary.subtract(SalaryTier.TIER_2.getTaxableIncome());

            if (remainingSalary.compareTo(SalaryTier.TIER_3.getTaxableIncome()) > 0) {
                taxInTier = SalaryTier.TIER_3.getTaxableIncome().multiply(TaxTier.TIER_3.getTax());
                totalTaxes = totalTaxes.add(taxInTier);

                System.out.printf("| Renda total dentro da faixa 3: %.2f\n", SalaryTier.TIER_3.getTaxableIncome());
                System.out.printf("| Valor do imposto nessa faixa: %.2f\n", taxInTier);
                System.out.printf("| Imposto acumulado até o momento: %.2f\n", totalTaxes);
            } else {
                taxInTier = remainingSalary.multiply(TaxTier.TIER_3.getTax());
                totalTaxes = totalTaxes.add(taxInTier);

                System.out.printf("| Renda na faixa 3: %.2f\n", remainingSalary);
                System.out.printf("| Valor do imposto nessa faixa: %.2f\n", taxInTier);
                System.out.printf("| Imposto acumulado até o momento: %.2f\n", totalTaxes);

                return totalTaxes;
            }
        }
        if (salary.compareTo(SalaryTier.TIER_3.getSalary()) > 0) {
            System.out.println("\n|\tParte da renda cai na faixa 4");
            remainingSalary = remainingSalary.subtract(SalaryTier.TIER_3.getTaxableIncome());

            taxInTier = remainingSalary.multiply(TaxTier.TIER_4.getTax());
            totalTaxes = totalTaxes.add(taxInTier);

            System.out.printf("| Renda na faixa 4: %.2f\n", remainingSalary);
            System.out.printf("| Valor do imposto nessa faixa: %.2f\n", taxInTier);
            System.out.printf("| Imposto acumulado até o momento: %.2f\n", totalTaxes);
        }

        return totalTaxes;
    }
}