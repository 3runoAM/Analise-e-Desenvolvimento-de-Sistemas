package edu.infnet.payrolL.infra;

import edu.infnet.payrolL.domain.Employee;
import edu.infnet.payrolL.domain.HourlyEmployee;
import edu.infnet.payrolL.domain.MonthlyEmployee;
import edu.infnet.payrolL.domain.Seller;

import java.util.List;

public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService() {
        employeeRepository = new EmployeeRepository();
    }

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Employee findByRegistrationNumber(long registrationNumber) {
        Employee Employee = null;
        if (registrationNumber > 0) {
            Employee = employeeRepository.findByRegistrationNumber(registrationNumber);
        }
        return Employee;
    }

    public List<MonthlyEmployee> findAllMonthlyEmployees() {
        List<MonthlyEmployee> monthlyEmployees = employeeRepository.findAllMonthlyEmployees();
        if (monthlyEmployees == null || monthlyEmployees.isEmpty()) {
            throw new IllegalArgumentException("Lista de mensalistas vazia");
        }
        return monthlyEmployees;
    }

    public void createEmployee(Employee employee) {
        if (employee == null) throw new IllegalArgumentException("Funcionário não pode ser nulo");

        if (employee instanceof Seller seller) validateEmployeeData(seller);
        else if (employee instanceof MonthlyEmployee monthlyEmployee) validateEmployeeData(monthlyEmployee);
        else if (employee instanceof HourlyEmployee hourlyEmployee) validateEmployeeData(hourlyEmployee);
        else throw new IllegalArgumentException("Tipo de funcionário desconhecido: " + employee.getClass().getSimpleName());
    }

    // MÉTODOS PRIVADOS  -----------------------------------------------------------------------------------------------
    private void areEmployeeDataValid(long registrationNumber, String name, String position) {
        if (registrationNumber <= 0) throw new IllegalArgumentException("Matrícula inválida");
        if (name == null || name.isBlank()) throw new IllegalArgumentException("Nome é obrigatório");
        if (position == null || position.isBlank()) throw new IllegalArgumentException("Cargo é obrigatório");
    }

    private void validateEmployeeData(HourlyEmployee employee) {
        areEmployeeDataValid(employee.getRegistrationNumber(), employee.getName(), employee.getPosition());

        if (employee.getHourlyRate() <= 0) throw new IllegalArgumentException("Valor da hora deve ser positivo");
        if (employee.getTotalHours() < 0)throw new IllegalArgumentException("Total de horas não pode ser negativo");

        employeeRepository.save(employee);
    }


    private void validateEmployeeData(MonthlyEmployee employee) {
        areEmployeeDataValid(employee.getRegistrationNumber(), employee.getName(), employee.getPosition());

        if (employee.getSalary() <= 0) throw new IllegalArgumentException("Salário deve ser positivo");

        employeeRepository.save(employee);
    }

    private void validateEmployeeData(Seller employee) {
        if (employee.getRegistrationNumber() <= 0) throw new IllegalArgumentException("Matrícula inválida");
        if (employee.getName() == null || employee.getName().isBlank()) throw new IllegalArgumentException("Nome é obrigatório");
        if (employee.getSalary() <= 0) throw new IllegalArgumentException("Salário deve ser positivo");
        if (employee.getCommission() < 0) throw new IllegalArgumentException("Comissão não pode ser negativa");
        if (employee.getTotalSales() < 0)  throw new IllegalArgumentException("Total de vendas não pode ser negativo");

        employeeRepository.save(employee);
    }
}
