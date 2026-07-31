package com.company.mrp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.mrp.entity.Customer;
import com.company.mrp.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService service;

    @PostMapping
    public Customer add(@RequestBody Customer customer) {
        return service.addCustomer(customer);
    }

    @GetMapping
    public List<Customer> getAll() {
        return service.getAllCustomers();
    }

    @PutMapping("/{id}")
    public Customer update(@PathVariable Long id, @RequestBody Customer customer) {
        return service.updateCustomer(id, customer);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteCustomer(id);
    }
}