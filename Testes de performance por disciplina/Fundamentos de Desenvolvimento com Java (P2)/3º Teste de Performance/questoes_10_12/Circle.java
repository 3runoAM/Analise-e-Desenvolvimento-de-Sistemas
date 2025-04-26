package com.bam.sandcastlejava.edu.infnet.tp3.questoes_10_12;

public class Circle {
    private double radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    public double calculateArea() {
        return Math.PI * (radius * radius);
    }
}
