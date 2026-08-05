package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    private SalesOrderRepository salesOrderRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Transactional
    public SalesOrder addSalesOrder(SalesOrderRequest request) {

        System.out.println("Saving Sales Order...");

        Customer customer = customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Customer Not Found"));

        Item item = itemRepository.findById(request.getItemId())
                .orElseThrow(() -> new RuntimeException("Item Not Found"));

        if (item.getQuantity() < request.getQuantity()) {
            throw new RuntimeException("Insufficient Stock");
        }

        SalesOrder lastOrder = salesOrderRepository.findTopByOrderByIdDesc();

        String nextCode = "SO001";

        if (lastOrder != null && lastOrder.getSalesOrderCode() != null) {

            try {

                int number = Integer.parseInt(lastOrder.getSalesOrderCode().substring(2));

                nextCode = String.format("SO%03d", number + 1);

            } catch (Exception e) {

                nextCode = "SO001";

            }
        }

        SalesOrder order = new SalesOrder();

        order.setSalesOrderCode(nextCode);
        order.setCustomer(customer);
        order.setItem(item);
        order.setQuantity(request.getQuantity());
        order.setPrice(item.getPrice());
        order.setOrderDate(request.getOrderDate());

        item.setQuantity(item.getQuantity() - request.getQuantity());

        itemRepository.save(item);

        SalesOrder savedOrder = salesOrderRepository.save(order);

        System.out.println("Saved Successfully : " + savedOrder.getId());

        return savedOrder;
    }

    public List<SalesOrder> getAll() {
        return salesOrderRepository.findAll();
    }

    public void delete(Long id) {
        salesOrderRepository.deleteById(id);
    }
}