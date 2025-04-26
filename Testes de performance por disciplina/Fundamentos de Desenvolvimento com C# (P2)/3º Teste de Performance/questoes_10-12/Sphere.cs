namespace TesteDePerformance3.questoes_10_12;

public class Sphere{
    private double _radius;

    public Sphere(double radius){
        _radius = radius;
    }
    
    public double CalculateVolume(){
        return (4.0 / 3.0) * Math.PI * (_radius * _radius * _radius);
    }
}