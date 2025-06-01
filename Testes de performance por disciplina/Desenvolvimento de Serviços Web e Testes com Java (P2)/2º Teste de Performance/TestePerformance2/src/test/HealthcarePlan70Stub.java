package test;

import main.HealthcarePlan;

import java.math.BigDecimal;

public class HealthcarePlan70Stub implements HealthcarePlan {
    @Override
    public BigDecimal getCoveragePercentage() {
        return new BigDecimal("0.70");
    }
}
