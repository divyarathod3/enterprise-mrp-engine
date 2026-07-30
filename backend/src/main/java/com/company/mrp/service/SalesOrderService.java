package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.entity.Item;
import com.company.mrp.entity.SalesOrder;
import com.company.mrp.repository.ItemRepository;
import com.company.mrp.repository.SalesOrderRepository;

@Service
public class SalesOrderService {

    @Autowired
    private SalesOrderRepository repository;

    @Autowired
    private ItemRepository itemRepository;

    public SalesOrder addSalesOrder(SalesOrder order){

        SalesOrder last = repository.findTopByOrderByIdDesc();

        String code="SO001";

        if(last!=null && last.getSalesOrderCode()!=null){

            try{

                int num=Integer.parseInt(last.getSalesOrderCode().substring(2));

                code=String.format("SO%03d",num+1);

            }catch(Exception e){}

        }

        order.setSalesOrderCode(code);

        for(Item item:itemRepository.findAll()){

            if(item.getItemCode().equals(order.getItemCode())){

                item.setQuantity(item.getQuantity()-order.getQuantity());

                itemRepository.save(item);

                break;

            }

        }

        return repository.save(order);

    }

    public List<SalesOrder> getAll(){

        return repository.findAll();

    }

    public void delete(Long id){

        repository.deleteById(id);

    }

}