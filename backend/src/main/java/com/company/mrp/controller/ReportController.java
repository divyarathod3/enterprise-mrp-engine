package com.company.mrp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.mrp.entity.Report;
import com.company.mrp.service.ReportService;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins="http://localhost:3000")
public class ReportController {

    @Autowired
    private ReportService service;

    @GetMapping
    public List<Report> getReports(){
        return service.getReports();
    }

    @PostMapping
    public Report saveReport(@RequestBody Report report){
        return service.saveReport(report);
    }
}