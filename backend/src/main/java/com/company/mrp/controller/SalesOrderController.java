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
    private SalesOrderService salesOrderService;

    @PostMapping
    public SalesOrder createSalesOrder(@RequestBody SalesOrderRequest request) {

        System.out.println("Received Sales Order Request");

        return salesOrderService.addSalesOrder(request);
    }

    @GetMapping
    public List<SalesOrder> getAllSalesOrders() {
        return salesOrderService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteSalesOrder(@PathVariable Long id) {
        salesOrderService.delete(id);
    }
}