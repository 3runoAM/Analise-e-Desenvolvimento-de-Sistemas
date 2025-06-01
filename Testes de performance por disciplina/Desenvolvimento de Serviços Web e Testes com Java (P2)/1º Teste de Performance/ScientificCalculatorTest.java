import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ScientificCalculatorTest {
    private static ScientificCalculator scientificCalculator;

    // INICIALIZAÇÃO DO CENÁRIO
    @BeforeEach
    public  void setUp() {
       scientificCalculator = new ScientificCalculator();
    }

    // TESTES DAS FUNÇÕES BÁSICAS7
    @Test
    public void shouldAssertSumOfPositives() {
        double result = scientificCalculator.add(1, 2);

        assertEquals(3, result);
    }

    @Test
    public void shouldAssertDifferenceOfSubtraction() {
        double result = scientificCalculator.subtract(10, 5.5);

        assertEquals(4.5, result);
    }

    @Test
    public void shouldAssertSquareRootPositive() {
        double result = scientificCalculator.squareRoot(16);

        assertEquals(4, result);
    }

    // TESTES DE EXCEÇÕES
    @Test
    public void shouldThrowExceptionWhenSquareRootNegative() {
        assertThrows(IllegalArgumentException.class, () -> scientificCalculator.squareRoot(-16));
    }

    @Test
    public void shouldThrowExceptionWhenDividingByZero() {
        assertThrows(IllegalArgumentException.class, () -> scientificCalculator.divide(10, 0));
    }

    // TESTES DAS FUNÇÕES TRIGONOMÉTRICAS
    @Test
    public void shouldAssertLogarithmOfPositiveNumbers() {
        double resultA = scientificCalculator.log(125);
        assertEquals(4.8283137373023015, resultA);
        System.out.println("Logaritmo de 125: " + resultA);

        double resultB = scientificCalculator.log(100);
        assertEquals(4.605170185988092, resultB);
        System.out.println("Logaritmo de 100: " + resultB);
    }

    @Test
    public void shouldAssertSineOfPositiveNumbers() {
        double resultA = scientificCalculator.sin(15);
        assertEquals(0.25881904510252074, resultA);
        System.out.println("Seno de 15: " + resultA);

        double resultB = scientificCalculator.sin(200);
        assertEquals(-0.34202014332566866, resultB);
        System.out.println("Seno de 200: " + resultB);
    }

    // TEARDOWN
    @AfterAll
    public static void tearDown() {
        scientificCalculator = null;
    }
}