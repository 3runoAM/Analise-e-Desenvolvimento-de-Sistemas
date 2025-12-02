package edu.infnet.payrolL.infra;

import edu.infnet.payrolL.domain.Employee;
import edu.infnet.payrolL.domain.HourlyEmployee;
import edu.infnet.payrolL.domain.MonthlyEmployee;
import edu.infnet.payrolL.domain.Seller;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmployeeRepository {
    public List<Employee> findAll() {
        List<Employee> employeeList = new ArrayList<>();
        try {
            // Inicializa o Firestore
            Firestore firestore = Firebase.getFirestore();

            // Busca todos os documentos da coleção "employees"
            ApiFuture<QuerySnapshot> query = firestore.collection("employees").get();

            // Obtém os registros do banco retornados pela consulta
            List<QueryDocumentSnapshot> documents = query.get().getDocuments();

            // Itera sobre os documentos e cria objetos Employee
            for (QueryDocumentSnapshot document : documents) {
                Employee employee = createEmployee(document);
                if (employee != null) {
                    employeeList.add(employee);
                }
            }
        } catch (Exception e) {
            System.out.println("Erro ao buscar os funcionários: " + e.getMessage());
            e.printStackTrace();
        }
        return employeeList;
    }

    public Employee findByRegistrationNumber(long registrationNumber) {
        try {
            Firestore firestore = Firebase.getFirestore();

            ApiFuture<QuerySnapshot> query = firestore.collection("employees")
                    .whereEqualTo("registrationNumber", registrationNumber)
                    .get();

            List<QueryDocumentSnapshot> documents = query.get().getDocuments();

            if (!documents.isEmpty()) return createEmployee(documents.get(0));
        } catch (Exception e) {
            System.out.println("Erro ao buscar funcionário por matrícula: " + e.getMessage());
            e.printStackTrace();
        }
        return null;
    }

    public List<MonthlyEmployee> findAllMonthlyEmployees() {
        List<MonthlyEmployee> monthlyEmployees = new ArrayList<>();
        try {
            Firestore firestore = Firebase.getFirestore();

            ApiFuture<QuerySnapshot> query = firestore.collection("employees")
                    .whereEqualTo("type", "monthlyEmployee")
                    .get();

            List<QueryDocumentSnapshot> documents = query.get().getDocuments();

            if (!documents.isEmpty()) {
                for (QueryDocumentSnapshot document : documents) {
                    MonthlyEmployee monthlyEmployee = (MonthlyEmployee) createEmployee(document);
                    if (monthlyEmployee != null) monthlyEmployees.add(monthlyEmployee);
                }
            }

            return monthlyEmployees;
        } catch (Exception e) {
            System.out.println("Erro ao buscar funcionário por matrícula: " + e.getMessage());
            e.printStackTrace();
        }
        return null;
    }

    public void save(Employee employee) {
        if (employee == null)  throw new IllegalArgumentException("Funcionário não pode ser nulo");

        String type = getEmployeeType(employee);
        try {
            Firestore firestore = Firebase.getFirestore();
            Map<String, Object> data = buildEmployeeData(employee, type);
            firestore.collection("employees")
                .document(String.valueOf(employee.getRegistrationNumber()))
                .set(data);
        } catch (Exception e) {
            System.out.println("Erro ao salvar funcionário: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // MÉTODOS UTILITÁRIOS ---------------------------------------------------------------------------------------------
    private Employee createEmployee(QueryDocumentSnapshot document) {
        String type = document.getString("type");
        if (type == null) return null;
        try {
            switch (type) {
                case "monthlyEmployee" -> {
                    if (document.contains("registrationNumber") && document.contains("name") &&
                            document.contains("position") && document.contains("salary")) {
                        return new MonthlyEmployee(
                                document.getLong("registrationNumber"),
                                document.getString("name"),
                                document.getString("position"),
                                document.getDouble("salary")
                        );
                    }
                }
                case "seller" -> {
                    if (document.contains("registrationNumber") && document.contains("name") &&
                            document.contains("salary") && document.contains("commission") &&
                            document.contains("totalSales")) {
                        return new Seller(
                                document.getLong("registrationNumber"),
                                document.getString("name"),
                                document.getDouble("salary"),
                                document.getDouble("commission"),
                                document.getDouble("totalSales")
                        );
                    }
                }
                case "hourlyEmployee" -> {
                    if (document.contains("registrationNumber") && document.contains("name") &&
                            document.contains("position") && document.contains("hourlyRate") &&
                            document.contains("totalHours"))
                        return new HourlyEmployee(
                                document.getLong("registrationNumber"),
                                document.getString("name"),
                                document.getString("position"),
                                document.getDouble("hourlyRate"),
                                document.getLong("totalHours")
                        );
                }
                default -> {
                    return null;
                }
            }
        } catch (Exception e) {
            System.out.println("Erro ao criar funcionário do documento " + document.getId() + ": " + e.getMessage());
        }

        return null;
    }

    private static Map<String, Object> buildEmployeeData(Employee employee, String type) {
        Map<String, Object> data = new HashMap<>();

        if (employee == null || type == null || type.isEmpty()) throw new IllegalArgumentException("Employee ou tipo não podem ser nulos");

        data.put("type", type);
        data.put("registrationNumber", employee.getRegistrationNumber());
        data.put("name", employee.getName());
        data.put("position", employee.getPosition());

        if (employee instanceof MonthlyEmployee me) {
            data.put("salary", me.getSalary());
        }
        if (employee instanceof Seller s) {
            data.put("commission", s.getCommission());
            data.put("totalSales", s.getTotalSales());
        }
        if (employee instanceof HourlyEmployee he) {
            data.put("hourlyRate", he.getHourlyRate());
            data.put("totalHours", he.getTotalHours());
        }

        return data;
    }

    private static String getEmployeeType(Employee employee) {
        if (employee instanceof Seller) {
            return "seller";
        } else if (employee instanceof MonthlyEmployee) {
            return "monthlyEmployee";
        } else if (employee instanceof HourlyEmployee) {
            return "hourlyEmployee";
        }
        throw new IllegalArgumentException("Tipo de funcionário desconhecido");
    }
}