package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.dto.SalesOrderRequest;
import com.company.mrp.entity.Customer;
import com.company.mrp.entity.Item;
import com.company.mrp.entity.SalesOrder;
import com.company.mrp.repository.CustomerRepository;
import com.company.mrp.repository.ItemRepository;
import com.company.mrp.repository.SalesOrderRepository;

@Service
public class SalesOrderService {

    @Autowired
    private SalesOrderRepository repository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ItemRepository itemRepository;

    public SalesOrder addSalesOrder(SalesOrderRequest request) {

        Customer customer = customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Item item = itemRepository.findById(request.getItemId())
                .orElseThrow(() -> new RuntimeException("Item not found"));

        if (item.getQuantity() < request.getQuantity()) {
            throw new RuntimeException("Insufficient Stock");
        }

        SalesOrder last = repository.findTopByOrderByIdDesc();

        String code = "SO001";

        if (last != null && last.getSalesOrderCode() != null) {

            try {

                int num = Integer.parseInt(last.getSalesOrderCode().substring(2));

                code = String.format("SO%03d", num + 1);

            } catch (Exception e) {
            }

        }

        SalesOrder order = new SalesOrder();

        order.setSalesOrderCode(code);
        order.setCustomer(customer);
        order.setItem(item);
        order.setQuantity(request.getQuantity());
        order.setPrice(item.getPrice());
        order.setOrderDate(request.getOrderDate());

        item.setQuantity(item.getQuantity() - request.getQuantity());

        itemRepository.save(item);

        return repository.save(order);

    }

    public List<SalesOrder> getAll() {

        return repository.findAll();

    }

    public void delete(Long id) {

        repository.deleteById(id);

    }

}