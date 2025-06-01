package Questao10;

import java.io.File;
import java.io.FileWriter;
import java.io.IOError;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.Scanner;

public class Questao10 {
    private static final Path filePath = Path.of("src/Questao10/produtos.txt");
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        try {
            for(int i = 1; i <= 3; i++){
                System.out.printf("Digite o nome produto %d: ", i);
                String productName = input.nextLine();

                System.out.printf("Digite o preço unitário do produto %d: ", i);
                double productPrice = Double.parseDouble(input.nextLine());

                System.out.printf("Digite a quantidade do produto %d: ", i);
                int productQuantity = Integer.parseInt(input.nextLine());

                Files.writeString(filePath,
                        String.format("| Produto %d: %s\n| Preço unitário: %.2f\n| Quantidade: %d\n\n", i, productName, productPrice, productQuantity),
                        StandardOpenOption.CREATE,
                        StandardOpenOption.APPEND);

                System.out.println();
            }

            for(var lines : Files.readAllLines(filePath)){
                System.out.println(lines);
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        input.close();
    }
}
