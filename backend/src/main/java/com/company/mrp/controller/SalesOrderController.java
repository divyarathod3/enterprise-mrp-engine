package com.company.mrp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.mrp.dto.SalesOrderRequest;
import com.company.mrp.entity.SalesOrder;
import com.company.mrp.service.SalesOrderService;

@RestController
@RequestMapping("/api/sales-orders")
@CrossOrigin(origins = "http://localhost:3000")
public class SalesOrderController {

    @Autowired
    private SalesOrderService service;

    @PostMapping
    public SalesOrder add(@RequestBody SalesOrderRequest request) {

        return service.addSalesOrder(request);

    }

    @GetMapping
    public List<SalesOrder> getAll() {

        return service.getAll();

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {

        service.delete(id);

    }

}