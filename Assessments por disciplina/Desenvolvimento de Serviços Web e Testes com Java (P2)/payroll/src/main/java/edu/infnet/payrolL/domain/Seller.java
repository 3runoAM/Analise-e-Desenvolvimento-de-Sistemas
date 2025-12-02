package edu.infnet.payrolL.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Seller extends MonthlyEmployee {
    private double commission;
    private double totalSales;

    public Seller(long registrationNumber, String name, double salary, double commission, double totalSales) {
        super(registrationNumber, name, "Seller", salary);
        this.commission = commission;
        this.totalSales = totalSales;
    }

    @Override
    public void calculateSalary() {
        super.printHeader();
        System.out.println("Gross Salary..." + formatter.format(salary));
        double commissions = totalSales * commission;
        System.out.println("Commissions......." + formatter.format(commissions));
        double tax = calculateTax(this.salary + commissions);
        double netSalary = this.salary + commissions - tax;
        System.out.println("Tax..........." + formatter.format(tax));
        System.out.println("Net Salary..." + formatter.format(netSalary));
    }
}