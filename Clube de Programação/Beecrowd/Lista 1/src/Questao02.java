import java.io.IOException;
import java.util.Scanner;

public class Questao02 {
    private static final Scanner SCANNER = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        int a = Integer.parseInt(SCANNER.nextLine());
        int b = Integer.parseInt(SCANNER.nextLine());

        System.out.println("X = %d".formatted(a + b));
    }
}