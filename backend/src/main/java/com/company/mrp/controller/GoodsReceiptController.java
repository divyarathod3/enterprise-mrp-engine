package com.company.mrp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.mrp.entity.GoodsReceipt;
import com.company.mrp.service.GoodsReceiptService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/grn")
public class GoodsReceiptController {

    @Autowired
    private GoodsReceiptService service;

    @PostMapping
    public GoodsReceipt add(@RequestBody GoodsReceipt receipt) {

        return service.addGoodsReceipt(receipt);

    }

    @GetMapping
    public List<GoodsReceipt> getAll() {

        return service.getAllGoodsReceipts();

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {

        service.deleteGoodsReceipt(id);

    }

}