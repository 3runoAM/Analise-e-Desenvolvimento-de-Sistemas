import java.util.Scanner;

public class Questao05 {
    private static final Scanner scanner = new Scanner(System.in).useDelimiter("\\A");;
    public static void main(String[] args) {
        String input = scanner.next();
        String[] values = input.split("\n");

        for(int i = 0; i < values.length - 1; i++) {
            int r = Integer.parseInt(values[i].split(" ")[0]);
            int n = Integer.parseInt(values[i].split(" ")[1]);

            int sufixesCombination = n * 26;
            double roadsToNameWithLetters = Math.max(0, r-n);

            int currentCase = i + 1;
            if (roadsToNameWithLetters > sufixesCombination) {
                System.out.printf("Case %d: impossible\n", currentCase);
            } else {
                int minimumSufixesUsed = (int) Math.ceil(roadsToNameWithLetters / n);
                System.out.printf("Case %d: %d\n", currentCase, minimumSufixesUsed);
            }
        }
    }
}