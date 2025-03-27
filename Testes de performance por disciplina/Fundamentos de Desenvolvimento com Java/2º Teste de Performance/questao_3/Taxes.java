package edu.infnet.tp2.questao_3;

public enum Taxes {
    DOLAR(5.773),
    EURO(6.040),
    POUND(7.284);

    private final double TAX;

    Taxes(double tax) {
        this.TAX = tax;
    }

    public double getTAX() {
        return TAX;
    }
}