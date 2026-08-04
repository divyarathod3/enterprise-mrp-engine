package com.company.mrp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.mrp.entity.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice,Long>{

    Invoice findTopByOrderByIdDesc();

}