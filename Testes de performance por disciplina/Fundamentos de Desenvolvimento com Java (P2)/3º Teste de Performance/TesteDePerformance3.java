package com.bam.sandcastlejava.edu.infnet.tp3;

import com.bam.sandcastlejava.edu.infnet.tp3.questao_01.Book;
import com.bam.sandcastlejava.edu.infnet.tp3.questoes_10_12.Circle;
import com.bam.sandcastlejava.edu.infnet.tp3.questoes_10_12.Sphere;
import com.bam.sandcastlejava.edu.infnet.tp3.questoes_2_6.Product;
import com.bam.sandcastlejava.edu.infnet.tp3.questoes_7_9.Account;

public class TesteDePerformance3 {
    public static void main(String[] args) {
        System.out.println("| Questão 01"); //---------------------------------------------------------------------------
        Book dune = new Book("Duna", "Frank Herbert", "Ficoes Científica", 1965);
        System.out.println(dune);



        System.out.println("| Questões 2 a 6"); //-----------------------------------------------------------------------
        Product milk = new Product("Leite", 3.5, 10);
        System.out.println(milk.getInformation());

        milk.updatePrice(2.5);
        milk.updateQuantity(20);
        System.out.println("Produto atualizado:\n" + milk.getInformation());

        milk.setPrice(2.5);
        System.out.println("Preço atualizado: " + milk.getPrice());
        milk.setQuantity(20);
        System.out.println("Quantidade atualizada: " + milk.getQuantity());



        System.out.println("\n| Questões 7 a 9"); //----------------------------------------------------------------------
        Account account = new Account("João Ninguém", 123456, "1234-5",
                1000, "01/01/2021");

        System.out.println(account);
        System.out.println("Sacando R$ 500,00:");
        if (account.withdraw(500)) System.out.println("Saque efetuado com sucesso!");

        System.out.println("Após saque:");
        System.out.println(account);

        System.out.println("Depositando R$ 1000,00:");
        account.deposit(1000);
        System.out.println("Depósito efetuado com sucesso!");
        System.out.println(account);



        System.out.println("| Questões 10 a 12"); //----------------------------------------------------------------------

        Circle circle = new Circle(3);
        System.out.println("Área do círculo: " + circle.calculateArea());

        Sphere sphere = new Sphere(5);
        System.out.println("Volume da esfera: " + sphere.calculateVolume());
    }
}