package Questao08;

public class Trainee extends Employee {
    public Trainee(String name, double salary) {
        super(name, salary);
    }

    @Override
    public double calculateSalary() {
        return baseSalary + (baseSalary * 0.2);
    }
}
