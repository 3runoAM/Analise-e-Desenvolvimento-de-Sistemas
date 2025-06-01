package test;

import main.Audit;
import main.ConsultHistoric;

import java.util.ArrayList;
import java.util.List;

public class FakeConsultHistoric implements ConsultHistoric {
    private final List<String> consults;
    private final Audit audit;

    public FakeConsultHistoric(Audit audit) {
        this.consults = new ArrayList<String>();
        this.audit = audit;
    }

    @Override
    public void addConsult(String data) {
        consults.add(data);
        audit.auditConsult();
    }

    @Override
    public List<String> getAllConsults() {
        return List.copyOf(consults);
    }

    @Override
    public boolean addConsultFuncWasCalled() {
        return audit.wasCalled();
    }
}