package main;

public class RefundNotAuthorizedException extends RuntimeException {
    public RefundNotAuthorizedException(String message) {
        super(message);
    }
}
