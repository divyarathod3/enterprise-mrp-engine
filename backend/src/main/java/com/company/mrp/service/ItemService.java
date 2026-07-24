package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.entity.Item;
import com.company.mrp.repository.ItemRepository;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

  // Add Item
public Item addItem(Item item) {

    String lastCode = itemRepository.findMaxItemCode();

    String newCode;

    if (lastCode == null) {

        newCode = "ITM001";

    } else {

        int number = Integer.parseInt(lastCode.substring(3));

        newCode = String.format("ITM%03d", number + 1);

    }

    item.setItemCode(newCode);

    return itemRepository.save(item);
}

    // Get All Items
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    // Get Item By Id
    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElse(null);
    }

    // Update Item
    public Item updateItem(Long id, Item item) {

        Item existingItem = itemRepository.findById(id).orElse(null);

        if (existingItem != null) {

            // Don't change Item Code
            existingItem.setItemName(item.getItemName());
            existingItem.setDescription(item.getDescription());
            existingItem.setPrice(item.getPrice());
            existingItem.setQuantity(item.getQuantity());

            return itemRepository.save(existingItem);
        }

        return null;
    }

    // Delete Item
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}