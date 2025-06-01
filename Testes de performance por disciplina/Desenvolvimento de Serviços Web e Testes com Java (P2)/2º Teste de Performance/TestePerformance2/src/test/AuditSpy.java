package test;

import main.Audit;

public class AuditSpy implements Audit {
    private boolean wasCalled;

    public AuditSpy() {
        this.wasCalled = false;
    }

    @Override
    public boolean wasCalled(){
        return wasCalled;
    };

    @Override
    public void auditConsult(){
        wasCalled = true;
    };
}