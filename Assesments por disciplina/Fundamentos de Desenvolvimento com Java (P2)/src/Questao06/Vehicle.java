package Questao06;

public class Vehicle {
    private String licensePlate;
    private String model;
    private int fabricationYear;
    private double kilometers;

    public Vehicle(String licensePlate, String model, int fabricationYear, double kilometers) {
        this.licensePlate = licensePlate;
        this.model = model;
        this.fabricationYear = fabricationYear;
        this.kilometers = kilometers;
    }

    public String getVehicleInformation(){
        return "Número da placa: %s\nModelo: %s\nAno de fabricação: %d\nQuilometragem: %.2f\n"
                .formatted(licensePlate, model, fabricationYear, kilometers);
    }

    public void addKilometers(double kilometers){
        this.kilometers += kilometers;
    }
}
