package com.company.mrp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.mrp.entity.Report;

public interface ReportRepository extends JpaRepository<Report,Long>{

}