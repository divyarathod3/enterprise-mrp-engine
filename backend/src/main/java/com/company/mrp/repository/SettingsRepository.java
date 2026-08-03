package com.company.mrp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.mrp.entity.Settings;

public interface SettingsRepository extends JpaRepository<Settings,Long>{

}