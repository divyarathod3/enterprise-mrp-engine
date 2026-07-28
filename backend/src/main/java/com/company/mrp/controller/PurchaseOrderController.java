package com.company.mrp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.mrp.entity.PurchaseOrder;
import com.company.mrp.service.PurchaseOrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/purchase-orders")
public class PurchaseOrderController {

    @Autowired
    private PurchaseOrderService purchaseOrderService;

    @PostMapping
    public PurchaseOrder addPurchaseOrder(@RequestBody PurchaseOrder order) {
        return purchaseOrderService.addPurchaseOrder(order);
    }

    @GetMapping
    public List<PurchaseOrder> getAllPurchaseOrders() {
        return purchaseOrderService.getAllPurchaseOrders();
    }

    @GetMapping("/{id}")
    public PurchaseOrder getPurchaseOrder(@PathVariable Long id) {
        return purchaseOrderService.getPurchaseOrderById(id);
    }

    @PutMapping("/{id}")
    public PurchaseOrder updatePurchaseOrder(
            @PathVariable Long id,
            @RequestBody PurchaseOrder order) {

        return purchaseOrderService.updatePurchaseOrder(id, order);
    }

    @DeleteMapping("/{id}")
    public void deletePurchaseOrder(@PathVariable Long id) {
        purchaseOrderService.deletePurchaseOrder(id);
    }
}