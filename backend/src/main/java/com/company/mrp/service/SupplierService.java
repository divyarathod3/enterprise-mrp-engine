package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.entity.Supplier;
import com.company.mrp.repository.SupplierRepository;

@Service
public class SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    // Add Supplier
    public Supplier addSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    // Get All Suppliers
    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    // Get Supplier By Id
    public Supplier getSupplierById(Long id) {
        return supplierRepository.findById(id).orElse(null);
    }

    // Update Supplier
    public Supplier updateSupplier(Long id, Supplier supplier) {

        Supplier existingSupplier =
                supplierRepository.findById(id).orElse(null);

        if (existingSupplier != null) {

            existingSupplier.setSupplierCode(supplier.getSupplierCode());
            existingSupplier.setSupplierName(supplier.getSupplierName());
            existingSupplier.setContactPerson(supplier.getContactPerson());
            existingSupplier.setPhone(supplier.getPhone());
            existingSupplier.setEmail(supplier.getEmail());
            existingSupplier.setAddress(supplier.getAddress());

            return supplierRepository.save(existingSupplier);
        }

        return null;
    }

    // Delete Supplier
    public void deleteSupplier(Long id) {
        supplierRepository.deleteById(id);
    }
}