package com.company.mrp.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "goods_receipts")
public class GoodsReceipt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String grnCode;

    private String poCode;

    private String supplierName;

    private String itemCode;

    private String itemName;

    private Integer orderedQuantity;

    private Integer receivedQuantity;

    private LocalDate receivedDate;

    public GoodsReceipt() {}

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getGrnCode() { return grnCode; }

    public void setGrnCode(String grnCode) { this.grnCode = grnCode; }

    public String getPoCode() { return poCode; }

    public void setPoCode(String poCode) { this.poCode = poCode; }

    public String getSupplierName() { return supplierName; }

    public void setSupplierName(String supplierName) { this.supplierName = supplierName; }

    public String getItemCode() { return itemCode; }

    public void setItemCode(String itemCode) { this.itemCode = itemCode; }

    public String getItemName() { return itemName; }

    public void setItemName(String itemName) { this.itemName = itemName; }

    public Integer getOrderedQuantity() { return orderedQuantity; }

    public void setOrderedQuantity(Integer orderedQuantity) {
        this.orderedQuantity = orderedQuantity;
    }

    public Integer getReceivedQuantity() { return receivedQuantity; }

    public void setReceivedQuantity(Integer receivedQuantity) {
        this.receivedQuantity = receivedQuantity;
    }

    public LocalDate getReceivedDate() { return receivedDate; }

    public void setReceivedDate(LocalDate receivedDate) {
        this.receivedDate = receivedDate;
    }
}