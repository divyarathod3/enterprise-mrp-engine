package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.entity.GoodsReceipt;
import com.company.mrp.entity.Item;
import com.company.mrp.repository.GoodsReceiptRepository;
import com.company.mrp.repository.ItemRepository;

@Service
public class GoodsReceiptService {

    @Autowired
    private GoodsReceiptRepository goodsReceiptRepository;

    @Autowired
    private ItemRepository itemRepository;

    // Add Goods Receipt
    public GoodsReceipt addGoodsReceipt(GoodsReceipt receipt) {

        // Generate GRN Code
        GoodsReceipt last = goodsReceiptRepository.findTopByOrderByIdDesc();

        String newCode = "GRN001";

        if (last != null &&
                last.getGrnCode() != null &&
                last.getGrnCode().startsWith("GRN")) {

            try {

                int number = Integer.parseInt(last.getGrnCode().substring(3));

                newCode = String.format("GRN%03d", number + 1);

            } catch (Exception e) {

                newCode = "GRN001";

            }

        }

        receipt.setGrnCode(newCode);

        // Update Inventory
        List<Item> items = itemRepository.findAll();

        for (Item item : items) {

            if (item.getItemCode().equals(receipt.getItemCode())) {

                item.setQuantity(
                        item.getQuantity() + receipt.getReceivedQuantity());

                itemRepository.save(item);

                break;
            }

        }

        return goodsReceiptRepository.save(receipt);

    }

    // Get All
    public List<GoodsReceipt> getAllGoodsReceipts() {

        return goodsReceiptRepository.findAll();

    }

    // Delete
    public void deleteGoodsReceipt(Long id) {

        goodsReceiptRepository.deleteById(id);

    }

}