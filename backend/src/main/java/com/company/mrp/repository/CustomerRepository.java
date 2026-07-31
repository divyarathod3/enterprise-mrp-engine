package com.company.mrp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.mrp.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findTopByOrderByIdDesc();

}