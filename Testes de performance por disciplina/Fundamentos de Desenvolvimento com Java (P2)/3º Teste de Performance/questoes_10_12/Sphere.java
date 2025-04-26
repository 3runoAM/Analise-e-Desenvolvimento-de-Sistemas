package com.bam.sandcastlejava.edu.infnet.tp3.questoes_10_12;

public class Sphere {
    private double radius;

    public Sphere(int radius) {
        this.radius = radius;
    }

    public double calculateVolume() {
        return (4.0 / 3.0) * Math.PI * (radius * radius * radius);
    }
}
