package edu.infnet.payrolL.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MonthlyEmployee extends Employee {
    protected double salary;

    public MonthlyEmployee(long registrationNumber, String name, String position, double salary) {
        super(registrationNumber, name, position);
        this.salary = salary;
    }

    @Override
    public void calculateSalary() {
        super.printHeader();
        System.out.println("Gross Salary..." + formatter.format(salary));
        double tax = calculateTax(this.salary);
        double netSalary = this.salary - tax;
        System.out.println("Tax..........." + formatter.format(tax));
        System.out.println("Net Salary..." + formatter.format(netSalary));
    }
}
