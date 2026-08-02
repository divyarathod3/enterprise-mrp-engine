package com.company.mrp.entity;

import jakarta.persistence.*;

@Entity
@Table(name="reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double totalSales;
    private Double totalPurchase;
    private Double revenue;
    private Double profit;
    private Integer availableStock;
    private Integer reservedStock;
    private Integer lowStock;
    private Integer outOfStock;

    public Report(){}

    public Long getId(){ return id; }
    public void setId(Long id){ this.id=id; }

    public Double getTotalSales(){ return totalSales; }
    public void setTotalSales(Double totalSales){ this.totalSales=totalSales; }

    public Double getTotalPurchase(){ return totalPurchase; }
    public void setTotalPurchase(Double totalPurchase){ this.totalPurchase=totalPurchase; }

    public Double getRevenue(){ return revenue; }
    public void setRevenue(Double revenue){ this.revenue=revenue; }

    public Double getProfit(){ return profit; }
    public void setProfit(Double profit){ this.profit=profit; }

    public Integer getAvailableStock(){ return availableStock; }
    public void setAvailableStock(Integer availableStock){ this.availableStock=availableStock; }

    public Integer getReservedStock(){ return reservedStock; }
    public void setReservedStock(Integer reservedStock){ this.reservedStock=reservedStock; }

    public Integer getLowStock(){ return lowStock; }
    public void setLowStock(Integer lowStock){ this.lowStock=lowStock; }

    public Integer getOutOfStock(){ return outOfStock; }
    public void setOutOfStock(Integer outOfStock){ this.outOfStock=outOfStock; }
}