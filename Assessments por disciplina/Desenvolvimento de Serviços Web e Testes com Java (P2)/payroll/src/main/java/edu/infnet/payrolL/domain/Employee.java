package edu.infnet.payrolL.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.text.NumberFormat;


@Getter
@NoArgsConstructor
public abstract class Employee implements Serializable {

    protected long registrationNumber;
    protected String name;
    protected String position;
    protected NumberFormat formatter = NumberFormat.getCurrencyInstance();

    public Employee(long registrationNumber, String name, String position) {
        this.registrationNumber = registrationNumber;
        this.name = name;
        this.position = position;
    }

    public abstract void calculateSalary();

    public void printHeader() {
        System.out.println("----- Paycheck -----");
        System.out.println("Name............" + name);
        System.out.println("Position........" + position);
    }

    public double calculateTax(double value) {
        double tax = 0;
        if (value > 5000) {
            tax = value * 0.30;
        } else if (value > 3000) {
            tax = value * 0.25;
        } else if (value > 2000) {
            tax = value * 0.15;
        }
        return tax;
    }
}
