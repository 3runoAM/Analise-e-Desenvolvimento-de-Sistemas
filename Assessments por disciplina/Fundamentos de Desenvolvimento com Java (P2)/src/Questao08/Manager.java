package Questao08;

public class Manager extends Employee{
    public Manager(String name, double salary) {
        super(name, salary);
    }

    @Override
    public double calculateSalary() {
        return baseSalary + (baseSalary * 0.1);
    }
}
