package edu.infnet.payrolL.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class HourlyEmployee extends Employee {
    private double hourlyRate;
    private long totalHours;

    public HourlyEmployee(long registrationNumber, String name, String position, double hourlyRate, long totalHours) {
        super(registrationNumber, name, position);
        this.hourlyRate = hourlyRate;
        this.totalHours = totalHours;
    }

    @Override
    public void calculateSalary() {
        super.printHeader();
        double grossSalary = hourlyRate * totalHours;
        System.out.println("Gross Salary......" + formatter.format(grossSalary));
        double tax = calculateTax(grossSalary);
        double netSalary = grossSalary - tax;
        System.out.println("Tax..............." + formatter.format(tax));
        System.out.println("Net Salary........" + formatter.format(netSalary));
    }
}
