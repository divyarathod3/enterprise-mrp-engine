package com.company.mrp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.company.mrp.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

}