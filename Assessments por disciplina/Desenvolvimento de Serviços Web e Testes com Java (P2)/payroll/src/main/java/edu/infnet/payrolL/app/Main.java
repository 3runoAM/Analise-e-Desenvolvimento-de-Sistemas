package edu.infnet.payrolL.app;


import edu.infnet.payrolL.infra.EmployeeService;
import io.javalin.Javalin;

public class Main {
    public static void main(String[] args) {
        Javalin server = Javalin.create().start(7000);
        var assessmentController = new AssessmentController(server);

        var employeeService = new EmployeeService();
        var employeeController = new EmployeeController(server, employeeService);
    }
}