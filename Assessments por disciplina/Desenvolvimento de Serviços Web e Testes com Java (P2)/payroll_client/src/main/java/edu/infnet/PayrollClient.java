package edu.infnet;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

public class PayrollClient {
    public static void main(String[] args) {
        createMonthlyEmployee();

        findAllMonthlyEmployees();

        findMonthlyEmployeeByRegistrationNumber(12345L);

        getStatus();
    }

    private static void createMonthlyEmployee() {
        try {
            var url = new URL("http://localhost:7000/monthly-employees");
            var connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setDoOutput(true);
            connection.setRequestProperty("Content-Type", "application/json");

            String requestBody = """
                    {
                      "registrationNumber": 5678,
                      "name": "Carlos Guanabara",
                      "position": "Developer",
                      "salary": 5000.00
                    }""";

            try (var outputStream = connection.getOutputStream()) {
                outputStream.write(requestBody.getBytes());
                outputStream.flush();
            }


            int responseCode = connection.getResponseCode();

            System.out.println("\n| POST: CRIAR UM NOVO MENSALISTA --------------------------------------------------");
            if (responseCode == HttpURLConnection.HTTP_CREATED) readAllLines(connection).forEach(System.out::println);
            else readErrorResponse(connection).forEach(System.out::println);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void findAllMonthlyEmployees() {
        try {
            var url = new URL("http://localhost:7000/monthly-employees");
            var connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();

            System.out.println("\n| GET: Lista de mensalistas -------------------------------------------------------");
            if (responseCode == HttpURLConnection.HTTP_OK) readAllLines(connection).forEach(System.out::println);
            else readErrorResponse(connection).forEach(System.out::println);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void findMonthlyEmployeeByRegistrationNumber(long registrationNumber) {
        try {
            var url = new URL("http://localhost:7000/monthly-employees/" + registrationNumber);
            var connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();

            System.out.println("\n| GET: Buscar mensalista por matrícula --------------------------------------------");
            if (responseCode == HttpURLConnection.HTTP_OK) readAllLines(connection).forEach(System.out::println);
            else readErrorResponse(connection).forEach(System.out::println);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void getStatus() {
        try {
            var url = new URL("http://localhost:7000/status");
            var connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();

            System.out.println("\n| GET: Status do servidor --------------------------------------------------------");
            if (responseCode == HttpURLConnection.HTTP_OK) readAllLines(connection).forEach(System.out::println);
            else readErrorResponse(connection).forEach(System.out::println);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Métodos auxiliares
    private static List<String> readAllLines(HttpURLConnection connection) throws Exception {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
            return reader.lines().toList();
        }
    }

    private static List<String> readErrorResponse(HttpURLConnection connection) throws Exception {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getErrorStream()))) {
            return reader.lines().toList();
        }
    }
}