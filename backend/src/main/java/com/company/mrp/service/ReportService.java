package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.entity.Report;
import com.company.mrp.repository.ReportRepository;

@Service
public class ReportService {

    @Autowired
    private ReportRepository repository;

    public List<Report> getReports(){
        return repository.findAll();
    }

    public Report saveReport(Report report){
        return repository.save(report);
    }
}