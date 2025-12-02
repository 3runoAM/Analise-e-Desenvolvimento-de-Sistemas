package edu.infnet.payrolL.app;

import edu.infnet.payrolL.domain.Employee;
import edu.infnet.payrolL.domain.MonthlyEmployee;
import edu.infnet.payrolL.infra.EmployeeService;
import io.javalin.Javalin;
import io.javalin.http.HttpStatus;

import java.util.List;

public class EmployeeController {
    private Javalin server;
    private final EmployeeService employeeService;

    public EmployeeController(Javalin server, EmployeeService employeeService) {
        this.server = server;
        this.employeeService = employeeService;

        server.get("/employees", contexto -> {
            List<Employee> employees = employeeService.findAll();

            if (employees != null && !employees.isEmpty()) {
                contexto.status(HttpStatus.OK);
                contexto.json(employees);
                return;
            }

            contexto.status(HttpStatus.NOT_FOUND);
        });

        server.get("/monthly-employees/{registrationNumber}", contexto -> {
            long registrationNumber = Long.parseLong(contexto.pathParam("registrationNumber"));
            Employee employee = employeeService.findByRegistrationNumber(registrationNumber);
            if (employee instanceof MonthlyEmployee) {
                contexto.json(employee);
                contexto.status(HttpStatus.OK);
                return;
            }

            contexto.status(HttpStatus.NOT_FOUND);
        });

        server.get("/monthly-employees", contexto -> {
            List<MonthlyEmployee> monthlyEmployees = employeeService.findAllMonthlyEmployees();
            if (monthlyEmployees != null && !monthlyEmployees.isEmpty()) {
                contexto.json(monthlyEmployees);
                contexto.status(HttpStatus.OK);
                return;
            }

            contexto.status(HttpStatus.NOT_FOUND);
        });

        server.post("/monthly-employees", contexto -> {
            MonthlyEmployee employee;
            try {
                employee = contexto.bodyAsClass(MonthlyEmployee.class);

                if (employee.getRegistrationNumber() <= 0 || employee.getName() == null || employee.getSalary() <= 0) {
                    contexto.status(HttpStatus.BAD_REQUEST);
                    return;
                }

                employeeService.createEmployee(employee);
                contexto.status(HttpStatus.CREATED);
                contexto.json(employee);

            } catch (Exception e) {
                contexto.status(HttpStatus.BAD_REQUEST);
            }
        });
    }
}