import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

public class TestePerformance3 {
    private static final List<HttpMethod> WITH_BODY_METHODS = List.of(HttpMethod.POST, HttpMethod.PUT, HttpMethod.PATCH);

    public static void main(String[] args) {
        try {
            System.out.println("| Exercício 01 -------------------------------------------- ");
            getAll();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 02 ---------------------------------------------");
            getById();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 03 ---------------------------------------------");
            getErrorById();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 04 ---------------------------------------------");
            getWithParams();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 05 ---------------------------------------------");
            postNewEntity();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 06 ---------------------------------------------");
            getNewEntity();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 07 ---------------------------------------------");
            postAndGetById();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 08 ---------------------------------------------");
            putEntityById();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 09 ---------------------------------------------");
            deleteById();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 10 ---------------------------------------------");
            invalidDeleteById();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 11 ---------------------------------------------");
            entityOptions();
            System.out.println("|-----------------------------------------------------------");

            System.out.println("| Exercício 12 ---------------------------------------------");
            simpleAPIExperiment();
            System.out.println("|-----------------------------------------------------------");
        } catch (IOException ex) {
            System.err.println("Erro ao processar a requisição: " + ex.getMessage());
        }
    }

    public static void getAll() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities");
        var connection = createConnection(url, HttpMethod.GET, null);

        handleResponse(connection);
        connection.disconnect();
    }

    public static void getById() throws IOException {
        for (var i = 1; i <= 8; i++) {
            var url = new URL("https://apichallenges.eviltester.com/sim/entities/%s".formatted(i));
            var connection = createConnection(url, HttpMethod.GET, null);

            handleResponse(connection);
            connection.disconnect();
        }
    }

    public static void getErrorById() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities/13");
        var connection = createConnection(url, HttpMethod.GET, null);

        handleResponse(connection);
        connection.disconnect();
    }

    public static void getWithParams() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities?categoria=teste&limite=5");
        var connection = createConnection(url, HttpMethod.GET, null);

        handleResponse(connection);
        connection.disconnect();
    }

    public static void postNewEntity() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities");
        var body = "{\n\"name\": \"aluno\"\n}";

        var connection = createConnection(url, HttpMethod.POST, body);

        handleResponse(connection);
        connection.disconnect();
    }

    public static void getNewEntity() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities/11");
        var connection = createConnection(url, HttpMethod.GET, null);

        handleResponse(connection);
        connection.disconnect();
    }

    public static void postAndGetById() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities/10");
        var body = "{\n\"name\": \"atualizado\"\n}";

        var postConnection = createConnection(url, HttpMethod.POST, body);
        handleResponse(postConnection);
        postConnection.disconnect();

        var getConnection = createConnection(url, HttpMethod.GET, null);
        handleResponse(getConnection);
        getConnection.disconnect();
    }

    public static void putEntityById() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities/10");
        var body = "{\n\"name\": \"atualizado\"\n}";

        var postConnection = createConnection(url, HttpMethod.PUT, body);
        handleResponse(postConnection);
        postConnection.disconnect();
    }

    public static void deleteById() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities/9");

        var deleteConnection = createConnection(url, HttpMethod.DELETE, null);
        handleResponse(deleteConnection);
        deleteConnection.disconnect();

        var getConnection = createConnection(url, HttpMethod.GET, null);
        handleResponse(getConnection);
        getConnection.disconnect();
    }

    public static void invalidDeleteById() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities/2");

        var deleteConnection = createConnection(url, HttpMethod.DELETE, null);
        handleResponse(deleteConnection);
        deleteConnection.disconnect();
    }

    public static void entityOptions() throws IOException {
        var url = new URL("https://apichallenges.eviltester.com/sim/entities");
        var connection = createConnection(url, HttpMethod.OPTIONS, null);

        System.out.printf("| Requisição OPTIONS para %s\n\t| Métodos suportados: %s\n", connection.getURL(), connection.getHeaderField("Allow"));
        connection.disconnect();
    }

    public static void simpleAPIExperiment() throws IOException {
        var getAllItemsUrl = new URL("https://apichallenges.eviltester.com/simpleapi/items");
        var getAllItemsConnection = createConnection(getAllItemsUrl, HttpMethod.GET, null);
        handleResponse(getAllItemsConnection);
        getAllItemsConnection.disconnect();
        //-------------------------------------
        var randomIsbnUrl = new URL("https://apichallenges.eviltester.com/simpleapi/randomisbn");
        var randomIsbnConnection = createConnection(randomIsbnUrl, HttpMethod.GET, null);

        String randomIsbn = "";
        if (randomIsbnConnection.getResponseCode() >= 200 && randomIsbnConnection.getResponseCode() < 299) {
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(randomIsbnConnection.getInputStream()))) {
                randomIsbn = reader.lines().map(line -> line.replace("{", "").replace("}", "").trim()).findFirst().orElse("");
            }
        }
        randomIsbnConnection.disconnect();
        //-------------------------------------
        var postURL = new URL("https://apichallenges.eviltester.com/simpleapi/items");
        var body = ("{\n" + "\"type\": \"book\"," + "\n\"isbn13\": \"%s\"," + "\n  \"price\": \"65.33\"," + "\"numberinstock\":0" + "\n}").formatted(randomIsbn);
        var postConnection = createConnection(postURL, HttpMethod.POST, body);
        handleResponse(postConnection);
        postConnection.disconnect();
        //-------------------------------------
        var putByIsbnUrl = new URL("https://apichallenges.eviltester.com/simpleapi/items/%s".formatted(randomIsbn));
        var putBody = "{\n\"type\": \"book\",\n\"isbn13\": \"%s\",\n  \"price\": \"165.99\",\n\"numberinstock\":1\n}".formatted(randomIsbn);
        var putConnection = createConnection(putByIsbnUrl, HttpMethod.PUT, putBody);
        handleResponse(putConnection);
        putConnection.disconnect();
        //-------------------------------------
        var getByIsbnUrl = new URL("https://apichallenges.eviltester.com/simpleapi/items/%s".formatted(randomIsbn));
        var getByIsbnConnection = createConnection(getByIsbnUrl, HttpMethod.GET, null);
        handleResponse(getByIsbnConnection);
        getByIsbnConnection.disconnect();
    }

    /**
     * Envia uma requisição HTTP para a URL especificada com o método indicado.
     *
     * @param url    URL do servidor para onde a requisição será enviada.
     * @param method Enum que representa o método HTTP a ser utilizado (GET, POST, PUT, DELETE).
     * @return
     * @throws IOException
     */
    private static HttpURLConnection createConnection(URL url, HttpMethod method, String body) throws IOException {
        var serverConnection = (HttpURLConnection) url.openConnection();
        serverConnection.setRequestMethod(method.name());
        serverConnection.setRequestProperty("Content-Type", "application/json");

        if (WITH_BODY_METHODS.contains(method)) {
            serverConnection.setDoOutput(true);
            try (var dataStream = new DataOutputStream(serverConnection.getOutputStream())) {
                dataStream.write(body.getBytes());
                dataStream.flush();
            }
        }

        return serverConnection;
    }

    /**
     * Lê a resposta do servidor e imprime o código de resposta e o conteúdo, dependendo do código de status HTTP.
     *
     * @param serverConnection Conexão HTTP estabelecida com o servidor.
     * @throws IOException Caso ocorra um erro ao ler a resposta do servidor.
     */
    private static void handleResponse(HttpURLConnection serverConnection) throws IOException {
        var responseCode = serverConnection.getResponseCode();
        System.out.printf("| Requisição para %s\n\t| Código da resposta: %s", serverConnection.getURL(), responseCode);

        if (responseCode >= 200 && responseCode < 299) {
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(serverConnection.getInputStream()))) {
                printResponse(reader);
            }
        } else {
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(serverConnection.getErrorStream()))) {
                printResponse(reader);
            }
        }
    }

    /**
     * Imprime a resposta do servidor formatada.
     *
     * @param reader BufferedReader para ler a resposta do servidor.
     */
    private static void printResponse(BufferedReader reader) {
        reader.lines().map(line -> line.replace("{", "\n").replace("}", "").trim()).forEach(line -> System.out.printf("\n\t| Conteúdo da resposta:{\n\t\t\t\t%s\n\t\t\t\t}\n", line));
    }
}