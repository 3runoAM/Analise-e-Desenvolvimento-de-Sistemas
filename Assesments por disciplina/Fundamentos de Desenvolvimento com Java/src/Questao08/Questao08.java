package Questao08;

public class Questao08 {
    public static void main(String[] args) {
        Employee manager = new Manager("Marta", 1500);

        System.out.printf("| Gerente %s\n", manager.getName());
        System.out.printf("| Salário de base: %.2f\n", manager.getBaseSalary());
        System.out.println("| Salário total: " + manager.calculateSalary());

        System.out.println();

        Employee trainee = new Trainee("João", 1000);
        System.out.printf("| Estagiário %s\n", trainee.getName());
        System.out.printf("| Salário de base: %.2f\n", trainee.getBaseSalary());
        System.out.println("| Salário total: " + trainee.calculateSalary());
    }
}
