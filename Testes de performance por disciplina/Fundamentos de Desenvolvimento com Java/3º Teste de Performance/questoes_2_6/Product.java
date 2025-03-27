package com.bam.sandcastlejava.edu.infnet.tp3.questoes_2_6;

public class Product {
    private String name;
    private double price;
    private int quantity;

    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    /**/

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    /**/

    public void updatePrice(double newPrice) {
        price = newPrice;
    }

    public void updateQuantity(int newQuantity) {
        quantity = newQuantity;
    }

    public String getInformation() {
        return "Produto: %s\n\tPreço: R$ %.2f\n\tQuantidade em estoque: %d\n".formatted(name, price, quantity);
    }

    @Override
    public String toString() {
        return "Produto: %s\n\tPreço: R$ %.2f\n\tQuantidade em estoque: %d\n".formatted(name, price, quantity);
    }
}
