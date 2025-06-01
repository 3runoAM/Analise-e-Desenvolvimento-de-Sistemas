namespace TestePerformance1.Exercicio04;

public class TemperatureConsumer{
    public static void Run()
    {
        TemperatureSensor sensor = new TemperatureSensor();
        sensor.TemperatureExceeded += OnTemperatureExceeded;

        string temp;
        do{
            Console.WriteLine("Digite a temperatura ou digite s para sair:");
            temp = Console.ReadLine();
            if (double.TryParse(temp, out double temperature)){
                sensor.CheckTemperature(temperature);
            }
        } while (temp != "s");
        Console.WriteLine();
    }
    
    public static void OnTemperatureExceeded(double temperature){
        Console.WriteLine($"A temperatura ultrapassou os 100 °C! Temperatura atual: {temperature} °C.");
    }
}