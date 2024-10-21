import java.util.Scanner;

public class Questao03 {
    private static final Scanner SCANNER = new Scanner(System.in);
    public static void main(String[] args) {
        String[] numbers = SCANNER.nextLine().split(" ");
        int a = Integer.parseInt(numbers[0]);
        int n = Integer.parseInt(numbers[1]);

        int index = 1;
        while(n <= 0){
            n = Integer.parseInt(numbers[index++]);
        }

        int sum = 0;
        for(int i = 0; i <= n - 1; i++){
            sum += a + i;
        }

        System.out.println(sum);
    }
}
