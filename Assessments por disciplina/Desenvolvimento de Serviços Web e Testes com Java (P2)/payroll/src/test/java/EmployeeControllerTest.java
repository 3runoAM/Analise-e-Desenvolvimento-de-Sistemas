import edu.infnet.payrolL.app.EmployeeController;
import edu.infnet.payrolL.infra.EmployeeService;
import io.javalin.Javalin;
import io.javalin.http.HttpStatus;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

import static org.junit.jupiter.api.Assertions.*;

public class EmployeeControllerTest {
    private static Javalin server;
    private static EmployeeController employeeController;
    private static EmployeeService employeeService;

    @BeforeAll
    public static void setUp() throws IOException {
        server = Javalin.create().start(7000);
        var employeeService = new EmployeeService();
        employeeController = new EmployeeController(server, employeeService);
        createMonthlyEmployees();
    }

    @Test
    public void shouldCreateMonthlyEmployee() throws IOException {
        var url = new URL("http://localhost:7000/monthly-employees");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-Type", "application/json");

        String requestBody = """
                {
                "registrationNumber": 12345,
                "name": "John Doe",
                "position": "Developer",
                "salary": 5000.00
                }""";

        try (var outputStream = connection.getOutputStream()) {
            outputStream.write(requestBody.getBytes());
            outputStream.flush();
        }

        var status = connection.getResponseCode();
        var response = new String(connection.getInputStream().readAllBytes());
        connection.disconnect();


        assertEquals(HttpStatus.CREATED.getCode(), status);
        assertTrue(response.contains("\"registrationNumber\":12345"));
        assertTrue(response.contains("\"name\":\"John Doe\""));
        assertTrue(response.contains("\"position\":\"Developer\""));
        assertTrue(response.contains("\"salary\":5000.0"));
    }


    @Test
    public void shouldNotCreateMonthlyEmployeeWithInvalidData() throws IOException {
        var url = new URL("http://localhost:7000/monthly-employees");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-Type", "application/json");

        String requestBody = """
                {
                "registrationNumber": -1,
                "name": "",
                "position": "Developer",
                }""";

        try (var outputStream = connection.getOutputStream()) {
            outputStream.write(requestBody.getBytes());
            outputStream.flush();
        }

        var status = connection.getResponseCode();
        connection.disconnect();

        assertEquals(HttpStatus.BAD_REQUEST.getCode(), status);
    }

    @Test
    public void shouldGetMonthlyEmployeeByRegistrationNumber() throws IOException {
        var url = new URL("http://localhost:7000/monthly-employees/12345");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        var status = connection.getResponseCode();
        var response = new String(connection.getInputStream().readAllBytes());
        connection.disconnect();

        assertEquals(HttpStatus.OK.getCode(), status);
        assertTrue(response.contains("\"registrationNumber\":12345"));
        assertTrue(response.contains("\"name\":\"John Doe\""));
        assertTrue(response.contains("\"position\":\"Developer\""));
        assertTrue(response.contains("\"salary\":5000.0"));
    }

    @Test
    public void shouldGetAllMonthlyEmployees() throws IOException {
        var url = new URL("http://localhost:7000/monthly-employees");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        var status = connection.getResponseCode();
        var response = new String(connection.getInputStream().readAllBytes());
        connection.disconnect();

        assertFalse(response.isEmpty());
        assertEquals(HttpStatus.OK.getCode(), status);
        for (var i = 0; i < response.length(); i++) {
            assertTrue(response.contains("\"registrationNumber\":"));
            assertTrue(response.contains("\"name\":"));
            assertTrue(response.contains("\"position\":"));
            assertTrue(response.contains("\"salary\""));
        }
    }

    @Test
    public void shouldReturnNotFoundForNonExistentEmployee() throws IOException {
        var url = new URL("http://localhost:7000/monthly-employees/99999");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        var status = connection.getResponseCode();
        connection.disconnect();

        assertEquals(HttpStatus.NOT_FOUND.getCode(), status);
    }

    // MÉTODOS AUXILIARES ---------------------------------------------------------------------------------------------
    private static void createMonthlyEmployees() throws IOException {
        for (int i = 0; i < 3; i++) {
            var url = new URL("http://localhost:7000/monthly-employees");
            var connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setDoOutput(true);
            connection.setRequestProperty("Content-Type", "application/json");

            String requestBody = """
                {
                "registrationNumber": %d,
                "name": "Funcionário %d",
                "position": "Developer",
                "salary": 5000.00
                }""".formatted(i + 1, i + 1);

            try (var outputStream = connection.getOutputStream()) {
                outputStream.write(requestBody.getBytes());
                outputStream.flush();
            }

            connection.disconnect();
        }
    }
}