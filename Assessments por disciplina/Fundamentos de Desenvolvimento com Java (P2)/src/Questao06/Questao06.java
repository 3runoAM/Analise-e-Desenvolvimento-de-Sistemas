package Questao06;

public class Questao06 {
    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle("CAB-4562", "Fusca", 1970, 100000.0);
        System.out.println(vehicle.getVehicleInformation());

        System.out.println("Registrando viagem de 1000 km...");
        vehicle.addKilometers(1000.0);
        System.out.println(vehicle.getVehicleInformation());

        Vehicle vehicle2 = new Vehicle("NAO-7523", "Gol", 2000, 50000.0);
        System.out.println(vehicle2.getVehicleInformation());

        System.out.println("Registrando viagem de 5000 km...");
        vehicle2.addKilometers(5000.0);
        System.out.println(vehicle2.getVehicleInformation());
    }
}
