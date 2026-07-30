package com.company.mrp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.mrp.entity.SalesOrder;
import com.company.mrp.service.SalesOrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/sales-orders")
public class SalesOrderController {

    @Autowired
    private SalesOrderService service;

    @PostMapping
    public SalesOrder add(@RequestBody SalesOrder order){

        return service.addSalesOrder(order);

    }

    @GetMapping
    public List<SalesOrder> getAll(){

        return service.getAll();

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){

        service.delete(id);

    }

}s