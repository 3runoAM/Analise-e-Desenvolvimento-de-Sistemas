package edu.infnet.tp2.questao_7;

import java.math.BigDecimal;

public enum TaxTier {
    // Salários da faixa insenta (TIER_0) não são taxados
    TIER_1(new BigDecimal("0.07")), // 7%
    TIER_2(new BigDecimal("0.15")), // 15%
    TIER_3(new BigDecimal("0.22")), // 22%
    TIER_4(new BigDecimal("0.27")); // 27%

    private final BigDecimal tax;

    TaxTier(BigDecimal tax) {
        this.tax = tax;
    }

    public BigDecimal getTax() {
        return tax;
    }
}