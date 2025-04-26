namespace TesteDePerformance2.questao_6;

public class Questao6{
    public static void Run(){
        Console.WriteLine("Digite seu peso em kg: ");
        double peso = double.Parse(Console.ReadLine());
        
        Console.WriteLine("Digite sua altura em metros: ");
        double altura = double.Parse(Console.ReadLine());
        
        double imc = peso / (altura * altura);
        
        if(imc < 18.5){
            Console.WriteLine($"Seu IMC é {imc:F2} e você está abaixo do peso.");
        }else if(imc < 24.9){
            Console.WriteLine($"Seu IMC é {imc:F2} e você está com o peso normal.");
        }else if(imc < 29.9){
            Console.WriteLine($"Seu IMC é {imc:F2} e você está com sobrepeso.");
        }else if(imc < 34.9){
            Console.WriteLine($"Seu IMC é {imc:F2} e você está com obesidade grau 1.");
        }else if(imc < 39.9){
            Console.WriteLine($"Seu IMC é {imc:F2} e você está com obesidade grau 2.");
        }else{
            Console.WriteLine($"Seu IMC é {imc:F2} e você está com obesidade grau 3.");
        }
    }
}