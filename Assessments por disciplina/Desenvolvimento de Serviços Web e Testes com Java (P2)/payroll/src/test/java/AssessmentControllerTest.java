import edu.infnet.payrolL.app.AssessmentController;
import io.javalin.Javalin;
import io.javalin.http.HttpStatus;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

import static org.junit.jupiter.api.Assertions.*;

public class AssessmentControllerTest {
    private static AssessmentController assessmentController;

    @BeforeAll
    public static void setup() {
        var server = Javalin.create().start(7000);
        assessmentController = new AssessmentController(server);
    }

    @Test
    public void shouldReturnMessageAndStatusCorrectly() throws IOException {
        var url = new URL("http://localhost:7000/hello");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        int status = connection.getResponseCode();
        var response = new String(connection.getInputStream().readAllBytes());
        connection.disconnect();

        assertEquals(HttpStatus.OK.getCode(), status);
        assertEquals("Hello Javalin!", response);
    }

    @Test
    public void shouldReturnStatusOkWithTimestamp() throws IOException {
        var url = new URL("http://localhost:7000/status");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        int status = connection.getResponseCode();
        var response = new String(connection.getInputStream().readAllBytes());
        connection.disconnect();

        assertEquals(HttpStatus.OK.getCode(), status);
        assertTrue(response.contains("{\n    \"status\": \"Ok\"\n    \"timestamp\": "));
    }

    @Test
    public void shouldReturnHelloName() throws IOException {
        var url = new URL("http://localhost:7000/saudacoes/John");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        int status = connection.getResponseCode();
        var response = new String(connection.getInputStream().readAllBytes());
        connection.disconnect();

        assertEquals(HttpStatus.OK.getCode(), status);
        assertEquals("{\n    \"mensagem\": \"Olá, John!\"\n}", response);
    }

    @Test
    public void shouldReturnNotFoundWhenEmptyPathParameter() throws IOException {
        var url = new URL("http://localhost:7000/saudacoes/");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        int status = connection.getResponseCode();
        connection.disconnect();

        assertEquals(HttpStatus.NOT_FOUND.getCode(), status);
    }

    @Test
    public void shouldEchoMessage() throws IOException {
        var url = new URL("http://localhost:7000/echo");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-Type", "application/json");

        String requestBody = "{\"mensagem\": \"Hello Javalineslines!\"}";
        try (var outputStream = connection.getOutputStream()) {
            outputStream.write(requestBody.getBytes());
            outputStream.flush();
        }

        int status = connection.getResponseCode();
        var response = new String(connection.getInputStream().readAllBytes());

        connection.disconnect();

        assertEquals(HttpStatus.OK.getCode(), status);
        assertEquals(requestBody, response);
    }

    @Test
    public void shouldNotEchoMessageWithMissingKey() throws IOException {
        var url = new URL("http://localhost:7000/echo");
        var connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-Type", "text/plain");

        String requestBody = "{\"example\": \"Hello Javalineslines!\"}";
        try (var outputStream = connection.getOutputStream()) {
            outputStream.write(requestBody.getBytes());
            outputStream.flush();
        }

       int status = connection.getResponseCode();
        connection.disconnect();

        assertEquals(HttpStatus.BAD_REQUEST.getCode(), status);
    }
}
