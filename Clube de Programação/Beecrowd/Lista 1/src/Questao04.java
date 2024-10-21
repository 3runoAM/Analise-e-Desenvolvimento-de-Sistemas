import java.util.Scanner;

public class Questao04 {
    private static final Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
        int[] array = new int[11];
        int v = Integer.parseInt(scanner.nextLine());
        array[0] = v;
        for(int i = 0; i < 10; i++){
            System.out.printf("N[%d] = %d\n", i, array[i]);
            array[i+1] = array[i] * 2;
        }
    }
}
