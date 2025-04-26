package edu.infnet.tp2.questao_7;

import java.math.BigDecimal;

public enum SalaryTier {
    TIER_0(new BigDecimal("27870.40"), new BigDecimal("0.0")),
    TIER_1(new BigDecimal("37751.55"), new BigDecimal("9881.15")),
    TIER_2(new BigDecimal("50148.25"), new BigDecimal("12396.70")),
    TIER_3(new BigDecimal("64259.59"), new BigDecimal("14111.34"));
    // TIER_4 seria maior que 64259.59, o limite superior do TIER_3

    private final BigDecimal salary;
    private final BigDecimal taxableIncome;

    SalaryTier(BigDecimal salary, BigDecimal taxableIncome) {
        this.salary = salary;
        this.taxableIncome = taxableIncome;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public BigDecimal getTaxableIncome() {
        return taxableIncome;
    }
}