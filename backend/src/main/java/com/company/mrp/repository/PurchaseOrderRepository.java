package com.company.mrp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.mrp.entity.PurchaseOrder;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {

    PurchaseOrder findTopByOrderByIdDesc();

}