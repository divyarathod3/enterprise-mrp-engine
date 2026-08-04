package com.company.mrp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;

import com.company.mrp.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query("SELECT MAX(i.itemCode) FROM Item i")
    String findMaxItemCode();

	Optional<Item> findById(Long id);
}