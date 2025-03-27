namespace TesteDePerformance3.questoes_10_12;

public class Circle{
    private double _radius;

    public Circle(double radius){
        _radius = radius;
    }

    public double CalculateArea(){
        return Math.PI * _radius * _radius;
    }
}