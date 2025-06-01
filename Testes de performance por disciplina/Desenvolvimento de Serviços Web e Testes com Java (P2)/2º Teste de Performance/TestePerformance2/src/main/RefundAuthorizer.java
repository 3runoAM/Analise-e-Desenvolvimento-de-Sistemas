package main;

import java.math.BigDecimal;

public interface RefundAuthorizer {
    boolean isRefundAuthorized(BigDecimal refund);
}
