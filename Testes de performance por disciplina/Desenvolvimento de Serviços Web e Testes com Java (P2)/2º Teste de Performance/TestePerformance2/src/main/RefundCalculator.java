package main;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Date;
import java.util.List;


public class RefundCalculator {
    private ConsultHistoric consultHistoric;
    private final BigDecimal maxRefund = new BigDecimal("150.00");

    public RefundCalculator(ConsultHistoric consultHistoric) {
        this.consultHistoric = consultHistoric;

    }

    public List<String> getConsultHistoric() {
        return consultHistoric.getAllConsults();
    }

    public ConsultHistoric getConsultHistoricInstance() {
        return consultHistoric;
    }

    public BigDecimal calculateRefund(BigDecimal totalAmount, Pacient pacient, HealthcarePlan healthcarePlan, RefundAuthorizer authorizer) {
        if (totalAmount.compareTo(BigDecimal.ZERO) <= 0) throw new IllegalArgumentException("O valor da consulta deve ser maior que zero.");

        String currentConsult = "Valor total: R$ %s".formatted(totalAmount);
        BigDecimal refund = totalAmount.multiply(healthcarePlan.getCoveragePercentage()).setScale(2, RoundingMode.HALF_UP);

        if (refund.compareTo(maxRefund) > 0) refund = maxRefund;

        if (!authorizer.isRefundAuthorized(refund)) throw new RefundNotAuthorizedException("Reembolso não autorizado");

        consultHistoric.addConsult(currentConsult += " na data: %s.\nReembolso calculado: %s".formatted(new Date(), refund));
        return refund;
    }
}