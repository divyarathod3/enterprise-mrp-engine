package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.entity.Invoice;
import com.company.mrp.repository.InvoiceRepository;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    // Add Invoice
    public Invoice addInvoice(Invoice invoice) {

        Invoice lastInvoice = invoiceRepository.findTopByOrderByIdDesc();

        String newCode = "INV001";

        if (lastInvoice != null &&
                lastInvoice.getInvoiceCode() != null &&
                lastInvoice.getInvoiceCode().startsWith("INV")) {

            try {

                int number = Integer.parseInt(lastInvoice.getInvoiceCode().substring(3));

                newCode = String.format("INV%03d", number + 1);

            } catch (Exception e) {

                newCode = "INV001";

            }

        }

        invoice.setInvoiceCode(newCode);

        if (invoice.getQuantity() != null &&
                invoice.getUnitPrice() != null) {

            invoice.setTotalAmount(
                    invoice.getQuantity() * invoice.getUnitPrice());

        }

        return invoiceRepository.save(invoice);

    }

    // Get All

    public List<Invoice> getAllInvoices() {

        return invoiceRepository.findAll();

    }

    // Get By Id

    public Invoice getInvoiceById(Long id) {

        return invoiceRepository.findById(id).orElse(null);

    }

    // Update

    public Invoice updateInvoice(Long id, Invoice invoice) {

        Invoice existing = invoiceRepository.findById(id).orElse(null);

        if (existing != null) {

            existing.setSalesOrderCode(invoice.getSalesOrderCode());
            existing.setCustomerName(invoice.getCustomerName());
            existing.setItemName(invoice.getItemName());
            existing.setQuantity(invoice.getQuantity());
            existing.setUnitPrice(invoice.getUnitPrice());

            existing.setTotalAmount(
                    invoice.getQuantity() * invoice.getUnitPrice());

            existing.setInvoiceDate(invoice.getInvoiceDate());

            return invoiceRepository.save(existing);

        }

        return null;

    }

    // Delete

    public void deleteInvoice(Long id) {

        invoiceRepository.deleteById(id);

    }

}