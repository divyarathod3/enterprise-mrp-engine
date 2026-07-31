package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.entity.Customer;
import com.company.mrp.repository.CustomerRepository;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;

    // Add Customer
    public Customer addCustomer(Customer customer) {

        Customer last = repository.findTopByOrderByIdDesc();

        String code = "CUS001";

        if (last != null && last.getCustomerCode() != null) {
            try {
                int num = Integer.parseInt(last.getCustomerCode().substring(3));
                code = String.format("CUS%03d", num + 1);
            } catch (Exception e) {}
        }

        customer.setCustomerCode(code);

        return repository.save(customer);
    }

    // Get All
    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }

    // Update
    public Customer updateCustomer(Long id, Customer customer) {

        Customer existing = repository.findById(id).orElse(null);

        if (existing != null) {
            existing.setCustomerName(customer.getCustomerName());
            existing.setContactPerson(customer.getContactPerson());
            existing.setPhone(customer.getPhone());
            existing.setEmail(customer.getEmail());
            existing.setAddress(customer.getAddress());

            return repository.save(existing);
        }

        return null;
    }

    // Delete
    public void deleteCustomer(Long id) {
        repository.deleteById(id);
    }
}