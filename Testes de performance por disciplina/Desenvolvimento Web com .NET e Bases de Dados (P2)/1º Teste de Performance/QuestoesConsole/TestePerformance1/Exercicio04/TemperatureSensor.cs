namespace TestePerformance1.Exercicio04;

public class TemperatureSensor{
    public delegate void TemperatureChange(double temperature);

    public event TemperatureChange TemperatureExceeded;
    
    public void CheckTemperature(double temperature){
        if (temperature > 100){ 
            TemperatureExceeded?.Invoke(temperature);
        }
    }
}