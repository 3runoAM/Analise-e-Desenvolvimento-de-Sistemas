package test;

import main.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.math.BigDecimal;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

public class RefundCalculatorTests {
    private static RefundCalculator calculator;

    private RefundAuthorizer authorizer;

    @BeforeEach
    public void setUp() {
        Audit auditSpy = new AuditSpy();
        ConsultHistoric fakeConsultHistoric = new FakeConsultHistoric(auditSpy);
        calculator = new RefundCalculator(fakeConsultHistoric);
        authorizer = Mockito.mock(RefundAuthorizer.class);
    }

    @Test
    public void shouldAssert70PercentCoverage() {
        var amount = new BigDecimal(200);
        var pacient = new Pacient();
        var stub70 = new HealthcarePlan70Stub();
        var expectedRefund = new BigDecimal("140.00");

        when(authorizer.isRefundAuthorized(expectedRefund)).thenReturn(true);
        var calculatedRefund = calculator.calculateRefund(amount, pacient, stub70, authorizer);

        assertTrue(assertEqualsWithTolerance(expectedRefund, calculatedRefund));
    }

    @Test
    public void shouldThrowWhenAmountZero() {
        var pacient = new Pacient();
        var stub70 = new HealthcarePlan70Stub();

        assertThrows(IllegalArgumentException.class,
                () -> calculator.calculateRefund(BigDecimal.ZERO, pacient, stub70, authorizer),
                "Reembolso não autorizado"
        );
    }

    @Test
    public void shouldAssert70AsRefund() {
        var amount = new BigDecimal(100);
        var pacient = new Pacient();
        var stub70 = new HealthcarePlan70Stub();
        var expectedRefund = new BigDecimal("70.00");

        when(authorizer.isRefundAuthorized(expectedRefund)).thenReturn(true);
        var calculatedRefund = calculator.calculateRefund(amount, pacient, stub70, authorizer);

        assertTrue(assertEqualsWithTolerance(expectedRefund, calculatedRefund));
    }

    @Test
    public void shouldThrowIllegalArgumentWhenNegativeAmount() {
        var amount = new BigDecimal(-100.00);
        var pacient = new Pacient();
        var stub70 = new HealthcarePlan70Stub();

        assertThrows(IllegalArgumentException.class,
                () -> calculator.calculateRefund(amount, pacient, stub70, authorizer),
                "O valor da consulta deve ser maior que zero.");
    }

    @Test
    public void shouldAssertConsultHistoricSize() {
        var consultA = createConsultWithAmountA();
        when(authorizer.isRefundAuthorized(consultA.expectedRefund)).thenReturn(true);
        calculator.calculateRefund(consultA.totalAmount, consultA.pacient, consultA.healthcarePlan, authorizer);

        var consultB = createConsultWithAmountB();
        when(authorizer.isRefundAuthorized(consultB.expectedRefund)).thenReturn(true);
        calculator.calculateRefund(consultB.totalAmount, consultB.pacient, consultB.healthcarePlan, authorizer);

        var consultHistoricSize = calculator.getConsultHistoric().size();
        assertEquals(2, consultHistoricSize);
    }

    @Test
    public void shouldAssertConsultHistoricOnIndex0() {
        var consultA = createConsultWithAmountA();
        when(authorizer.isRefundAuthorized(consultA.expectedRefund)).thenReturn(true);
        calculator.calculateRefund(consultA.totalAmount, consultA.pacient, consultA.healthcarePlan, authorizer);

        var consultB = createConsultWithAmountB();
        when(authorizer.isRefundAuthorized(consultB.expectedRefund)).thenReturn(true);
        calculator.calculateRefund(consultB.totalAmount, consultB.pacient, consultB.healthcarePlan, authorizer);

        var consultHistoric = calculator.getConsultHistoric();

        assertEquals("Valor total: R$ %s na data: %s.\nReembolso calculado: %s".formatted(consultA.totalAmount, new Date(), consultA.expectedRefund), consultHistoric.get(0));
    }

    @Test
    public void shouldAssertConsultHistoricOnIndex1() {
        var consultA = createConsultWithAmountA();
        when(authorizer.isRefundAuthorized(consultA.expectedRefund)).thenReturn(true);
        calculator.calculateRefund(consultA.totalAmount, consultA.pacient, consultA.healthcarePlan, authorizer);

        var consultB = createConsultWithAmountB();
        when(authorizer.isRefundAuthorized(consultB.expectedRefund)).thenReturn(true);
        calculator.calculateRefund(consultB.totalAmount, consultB.pacient, consultB.healthcarePlan, authorizer);

        var consultHistoric = calculator.getConsultHistoric();

        assertEquals("Valor total: R$ %s na data: %s.\nReembolso calculado: %s".formatted(consultB.totalAmount, new Date(), consultB.expectedRefund), consultHistoric.get(1));
    }

    @Test
    public void shouldAssert80PercentCoverage(){
        var amount = new BigDecimal(200);
        var pacient = new Pacient();
        var stub80 = new HealthcarePlan80Stub();
        var expectedRefund = new BigDecimal("160.00");

        when(authorizer.isRefundAuthorized(expectedRefund)).thenReturn(true);
        var calculatedRefund = calculator.calculateRefund(amount, pacient, stub80, authorizer);

        assertTrue(assertEqualsWithTolerance(expectedRefund, calculatedRefund));
    }

    @Test
    public void shouldAssert50PercentCoverage(){
        var amount = new BigDecimal(200);
        var pacient = new Pacient();
        var stub50 = new HealthcarePlan50Stub();
        var expectedRefund = new BigDecimal("100.00");

        when(authorizer.isRefundAuthorized(expectedRefund)).thenReturn(true);
        var calculatedRefund = calculator.calculateRefund(amount, pacient, stub50, authorizer);

        assertTrue(assertEqualsWithTolerance(expectedRefund, calculatedRefund));
    }

    @Test
    public void shouldAssertTrueOnAudit() {
        var amount = new BigDecimal("150.99");
        var pacient = new Pacient();
        var stub70 = new HealthcarePlan70Stub();

        var expectedRefund = new BigDecimal("105.69");
        when(authorizer.isRefundAuthorized(expectedRefund)).thenReturn(true);
        calculator.calculateRefund(amount, pacient, stub70, authorizer);

        assertTrue(calculator.getConsultHistoricInstance().addConsultFuncWasCalled());
    }

    @Test
    public void shouldAssertFalseOnAudit() {
        // Nenhuma consulta é feita

        assertFalse(calculator.getConsultHistoricInstance().addConsultFuncWasCalled());
    }

    @Test
    public void shouldAuthorizeRefund() {
        var amount = new BigDecimal("633.54");
        var pacient = new Pacient();
        var stub70 = new HealthcarePlan70Stub();

        var expectedRefund = new BigDecimal("443.48");
        when(authorizer.isRefundAuthorized(expectedRefund)).thenReturn(true);

        var calculatedRefund = calculator.calculateRefund(amount, pacient, stub70, authorizer);

        assertTrue(assertEqualsWithTolerance(expectedRefund, calculatedRefund));
    }

    @Test
    public void shouldNotAuthorizeRefund() {
        var amount = new BigDecimal("633.54");
        var pacient = new Pacient();
        var stub70 = new HealthcarePlan70Stub();

        var expectedRefund = new BigDecimal("443.48");
        when(authorizer.isRefundAuthorized(expectedRefund)).thenReturn(false);

        assertThrows(RefundNotAuthorizedException.class,
                () -> calculator.calculateRefund(amount, pacient, stub70, authorizer),
                "Refund not authorized"
        );
    }

    @Test
    public void shouldRespectRefundLimitOf150() {
        var consult = createConsultWithRefundOverLimit();

        when(authorizer.isRefundAuthorized(consult.expectedRefund)).thenReturn(true);
        var calculatedRefund = calculator.calculateRefund(consult.totalAmount, consult.pacient, consult.healthcarePlan, authorizer);

        assertTrue(assertEqualsWithTolerance(consult.expectedRefund, calculatedRefund));
    }

    @Test
    public void shouldAssertRefundLimitOf150() {
        var consult = createConsultWithRefundOverLimit();

        when(authorizer.isRefundAuthorized(consult.expectedRefund)).thenReturn(true);
        var calculatedRefund = calculator.calculateRefund(consult.totalAmount, consult.pacient, consult.healthcarePlan, authorizer);

        assertTrue(assertEqualsWithTolerance(consult.expectedRefund, calculatedRefund));
    }

    @Test
    public void shouldAssertComponentsFlow(){
        var stub80 = new HealthcarePlan80Stub();
        var authorizerMock = Mockito.mock(RefundAuthorizer.class);

        var pacient = new Pacient();
        var auditSpy = new AuditSpy();

        var fakeConsultHistoric = new FakeConsultHistoric(auditSpy);
        var refundCalculator = new RefundCalculator(fakeConsultHistoric);

        var consultA = createConsultWithAmountB();
        var consultB = createConsultWithRefundOverLimit();

        when(authorizerMock.isRefundAuthorized(consultA.expectedRefund)).thenReturn(true);
        assertTrue(assertEqualsWithTolerance(
                consultA.expectedRefund,
                refundCalculator.calculateRefund(consultA.totalAmount, pacient, stub80, authorizerMock)
        ));

        when(authorizerMock.isRefundAuthorized(consultB.expectedRefund)).thenReturn(true);
        assertTrue(assertEqualsWithTolerance(
                consultA.expectedRefund,
                refundCalculator.calculateRefund(consultA.totalAmount, pacient, stub80, authorizerMock)
        ));

        assertTrue(refundCalculator.getConsultHistoricInstance().addConsultFuncWasCalled());
    }

    private static boolean assertEqualsWithTolerance(BigDecimal expectedRefund, BigDecimal currentRefund) {
        var tolerance = new BigDecimal("0.01");
        return currentRefund.subtract(expectedRefund).abs().compareTo(tolerance) <= 0;
    }

    private static Consult createConsultWithAmountA() {
        return new Consult(new BigDecimal("150.99"), new Pacient(), new HealthcarePlan70Stub(), new BigDecimal("105.69"));
    }

    private static Consult createConsultWithAmountB() {
        return new Consult(new BigDecimal("120.00"), new Pacient(), new HealthcarePlan70Stub(), new BigDecimal("84.00"));
    }

    private static Consult createConsultWithRefundOverLimit() {
        return new Consult(new BigDecimal("350.99"), new Pacient(), new HealthcarePlan70Stub(), new BigDecimal("150.00"));
    }
}

class Consult {
    final BigDecimal totalAmount;
    final Pacient pacient;
    final HealthcarePlan healthcarePlan;
    final BigDecimal expectedRefund;

    public Consult(BigDecimal totalAmount, Pacient pacient, HealthcarePlan healthcarePlan, BigDecimal expectedRefund) {
        this.totalAmount = totalAmount;
        this.pacient = pacient;
        this.healthcarePlan = healthcarePlan;
        this.expectedRefund = expectedRefund;
    }
}