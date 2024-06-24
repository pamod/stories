package org.wso2.demo.loyalty;

import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/payment")
public class PaymentController {
    Map<String, Payment> paymentRepository = new ConcurrentHashMap<>();

    @PostMapping()
    public String payment(@RequestBody Payment point) {
        String successMessage = "{ status: \"success\"}";
        Payment payments = paymentRepository.get(point.getId());
        if (null == payments) {
            paymentRepository.put(point.getId(), point);
        } else {
            payments.setAmount(payments.getAmount() +
                    point.getAmount());
            paymentRepository.put(point.getId(), payments);
        }
        return successMessage;
    }

    @GetMapping()
    public Payment getPayment(@RequestParam String id) {
        return paymentRepository.get(id);
    }

    @DeleteMapping()
    public String deletePayment(@RequestParam String id) {
        String successMessage = "{ status: \"success\"}";
        paymentRepository.remove(id);
        return successMessage;
    }

    @GetMapping("/all")
    public Map<String, Payment> getAllPayments() {
        return paymentRepository;
    }
}
