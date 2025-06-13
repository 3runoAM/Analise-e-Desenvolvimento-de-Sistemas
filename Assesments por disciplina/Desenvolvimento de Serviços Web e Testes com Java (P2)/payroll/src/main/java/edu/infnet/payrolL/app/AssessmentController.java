package edu.infnet.payrolL.app;

import io.javalin.Javalin;
import io.javalin.http.HttpStatus;

import java.time.LocalDateTime;

public class AssessmentController {
    private Javalin server;
    
    public AssessmentController(Javalin server) {
        this.server = server;

        server.get("/hello", context -> {
            context.result("Hello Javalin!");
        });

        server.get("/status", context -> {
            context.status(HttpStatus.OK);
            context.json(String.format("{\n    \"status\": \"Ok\"\n    \"timestamp\": \"%s\"\n}", HttpStatus.OK.getMessage(), LocalDateTime.now()));
        });

        server.get("/saudacoes/{nome}", context -> {
            var name = context.pathParam("nome");

            context.json(String.format("{\n    \"mensagem\": \"Olá, %s!\"\n}", name));
            context.status(HttpStatus.OK);
        });

        server.post("/echo", context -> {
            var body = context.body();
            if (body.contains("mensagem")) {
                context.json(body);
                context.status(HttpStatus.OK);
                return;
            }
            context.status(HttpStatus.BAD_REQUEST);
        });
    }
}