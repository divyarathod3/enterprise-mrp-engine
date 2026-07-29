package com.company.mrp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.mrp.entity.GoodsReceipt;

public interface GoodsReceiptRepository extends JpaRepository<GoodsReceipt, Long> {

    GoodsReceipt findTopByOrderByIdDesc();

}