package com.company.mrp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mrp.entity.Settings;
import com.company.mrp.repository.SettingsRepository;

@Service
public class SettingsService {

    @Autowired
    private SettingsRepository repository;

    public List<Settings> getSettings(){
        return repository.findAll();
    }

    public Settings save(Settings settings){
        return repository.save(settings);
    }
}