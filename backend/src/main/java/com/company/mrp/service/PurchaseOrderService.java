package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.entity.PurchaseOrder;
import com.company.mrp.repository.PurchaseOrderRepository;

@Service
public class PurchaseOrderService {

    @Autowired
    private PurchaseOrderRepository purchaseOrderRepository;

    // Add Purchase Order
    public PurchaseOrder addPurchaseOrder(PurchaseOrder purchaseOrder) {

        PurchaseOrder lastOrder = purchaseOrderRepository.findTopByOrderByIdDesc();

        String newCode = "PO001";

        if (lastOrder != null &&
                lastOrder.getPoCode() != null &&
                lastOrder.getPoCode().startsWith("PO")) {

            try {

                int number = Integer.parseInt(lastOrder.getPoCode().substring(2));

                newCode = String.format("PO%03d", number + 1);

            } catch (NumberFormatException e) {

                newCode = "PO001";

            }

        }

        purchaseOrder.setPoCode(newCode);

        purchaseOrder.setTotalAmount(
                purchaseOrder.getQuantity() * purchaseOrder.getUnitPrice());

        return purchaseOrderRepository.save(purchaseOrder);

    }

    // Get All Purchase Orders
    public List<PurchaseOrder> getAllPurchaseOrders() {
        return purchaseOrderRepository.findAll();
    }

    // Get Purchase Order By Id
    public PurchaseOrder getPurchaseOrderById(Long id) {
        return purchaseOrderRepository.findById(id).orElse(null);
    }

    // Update Purchase Order
    public PurchaseOrder updatePurchaseOrder(Long id, PurchaseOrder purchaseOrder) {

        PurchaseOrder existing = purchaseOrderRepository.findById(id).orElse(null);

        if (existing != null) {

            existing.setSupplierCode(purchaseOrder.getSupplierCode());
            existing.setSupplierName(purchaseOrder.getSupplierName());

            existing.setItemCode(purchaseOrder.getItemCode());
            existing.setItemName(purchaseOrder.getItemName());

            existing.setQuantity(purchaseOrder.getQuantity());

            existing.setUnitPrice(purchaseOrder.getUnitPrice());

            existing.setTotalAmount(
                    purchaseOrder.getQuantity() * purchaseOrder.getUnitPrice());

            existing.setOrderDate(purchaseOrder.getOrderDate());

            existing.setStatus(purchaseOrder.getStatus());

            return purchaseOrderRepository.save(existing);
        }

        return null;

    }

    // Delete Purchase Order
    public void deletePurchaseOrder(Long id) {
        purchaseOrderRepository.deleteById(id);
    }

}