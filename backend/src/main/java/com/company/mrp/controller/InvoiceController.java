package com.company.mrp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.mrp.dto.InvoiceRequest;
import com.company.mrp.entity.Invoice;
import com.company.mrp.service.InvoiceService;

@RestController
@RequestMapping("/api/invoices")
@CrossOrigin(origins = "http://localhost:3000")
public class InvoiceController {

    @Autowired
    private InvoiceService service;

    @PostMapping
    public Invoice create(@RequestBody InvoiceRequest request) {

        return service.createInvoice(request);

    }

    @GetMapping
    public List<Invoice> getAll() {

        return service.getAllInvoices();

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {

        service.deleteInvoice(id);

    }

}