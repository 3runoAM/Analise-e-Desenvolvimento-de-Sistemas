package main;

import java.util.List;

public interface ConsultHistoric {
    void addConsult(String data);
    List<String> getAllConsults();
    boolean addConsultFuncWasCalled();
}