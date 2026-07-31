package com.company.mrp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.mrp.entity.Invoice;
import com.company.mrp.service.InvoiceService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/invoices")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @PostMapping
    public Invoice addInvoice(@RequestBody Invoice invoice) {

        return invoiceService.addInvoice(invoice);

    }

    @GetMapping
    public List<Invoice> getAllInvoices() {

        return invoiceService.getAllInvoices();

    }

    @GetMapping("/{id}")
    public Invoice getInvoice(@PathVariable Long id) {

        return invoiceService.getInvoiceById(id);

    }

    @PutMapping("/{id}")
    public Invoice updateInvoice(
            @PathVariable Long id,
            @RequestBody Invoice invoice) {

        return invoiceService.updateInvoice(id, invoice);

    }

    @DeleteMapping("/{id}")
    public void deleteInvoice(@PathVariable Long id) {

        invoiceService.deleteInvoice(id);

    }

}