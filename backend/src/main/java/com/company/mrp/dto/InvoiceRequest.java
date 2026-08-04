package com.company.mrp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.mrp.entity.SalesOrder;

public interface SalesOrderRepository extends JpaRepository<SalesOrder, Long> {

    SalesOrder findTopByOrderByIdDesc();

    Optional<SalesOrder> findById(Long id);

}