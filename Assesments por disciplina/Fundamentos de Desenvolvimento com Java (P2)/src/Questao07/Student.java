package Questao07;

public class Student {
    private String name;
    private String registrationNumber;
    private double gradeA;
    private double gradeB;
    private double gradeC;

    public Student(String name, String registrationNumber, double gradeA, double gradeB, double gradeC) {
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.gradeA = gradeA;
        this.gradeB = gradeB;
        this.gradeC = gradeC;
    }

    public String isApproved() {
        return calculateAverage() >= 7.0 ? "Aprovado" : "Reprovado";
    }

    private double calculateAverage() {
        return (gradeA + gradeB + gradeC) / 3.0;
    }
}
