package edu.infnet.tp2.questao_1;

public class Person {
    private String name;
    private int age;
    private String motherName;
    private String fatherName;

    public Person(String name, int age, String motherName, String fatherName) {
        this.name = name;
        this.age = age;
        this.motherName = motherName;
        this.fatherName = fatherName;
    }

    public String findLongestName() {
        int personNameLength = countLetters(name);
        int motherNameLength = countLetters(motherName);
        int fatherNameLength = countLetters(fatherName);

        if(personNameLength > motherNameLength && personNameLength > fatherNameLength) {
            return "O nome da pessoa tem mais letras que o nome da mãe e do pai";
        } else if(motherNameLength > personNameLength && motherNameLength > fatherNameLength) {
            return "O nome da mãe é maior que o nome da pessoa e do pai.";
        } else if(fatherNameLength > personNameLength && fatherNameLength > motherNameLength) {
            return "O nome do pai é maior que o nome da pessoa e da mãe.";
        }
        return "Os nomes tem a mesma quantidade de letras.";
    }

    public int countLetters(String name) {
        return name.trim().replace(" ", "").length();
    }

    public String getInformation() {
        return String.format("Nome da pessoa: %s, %d anos\nNome da mãe: %s\nNome do pai: %s",
                name, age, motherName, fatherName);
    }
}
