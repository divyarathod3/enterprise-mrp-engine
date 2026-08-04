package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.dto.InvoiceRequest;
import com.company.mrp.entity.Invoice;
import com.company.mrp.entity.SalesOrder;
import com.company.mrp.repository.InvoiceRepository;
import com.company.mrp.repository.SalesOrderRepository;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private SalesOrderRepository salesOrderRepository;

    public Invoice createInvoice(InvoiceRequest request) {

        SalesOrder salesOrder = salesOrderRepository.findById(request.getSalesOrderId())
                .orElseThrow(() -> new RuntimeException("Sales Order Not Found"));

        Invoice last = invoiceRepository.findTopByOrderByIdDesc();

        String code = "INV001";

        if (last != null && last.getInvoiceCode() != null) {

            try {

                int number = Integer.parseInt(last.getInvoiceCode().substring(3));

                code = String.format("INV%03d", number + 1);

            } catch (Exception e) {

            }

        }

        double subtotal = salesOrder.getPrice() * salesOrder.getQuantity();

        double gst = subtotal * 0.18;

        double total = subtotal + gst;

        Invoice invoice = new Invoice();

        invoice.setInvoiceCode(code);
        invoice.setSalesOrder(salesOrder);
        invoice.setInvoiceDate(request.getInvoiceDate());
        invoice.setGst(gst);
        invoice.setTotal(total);

        return invoiceRepository.save(invoice);

    }

    public List<Invoice> getAllInvoices() {

        return invoiceRepository.findAll();

    }

    public void deleteInvoice(Long id) {

        invoiceRepository.deleteById(id);

    }

}