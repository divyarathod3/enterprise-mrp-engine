package com.company.mrp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.mrp.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

    Item findTopByOrderByIdDesc();

}