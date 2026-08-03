package com.company.mrp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.mrp.entity.Settings;
import com.company.mrp.service.SettingsService;

@RestController
@RequestMapping("/api/settings")
@CrossOrigin(origins="http://localhost:3000")
public class SettingsController {

    @Autowired
    private SettingsService service;

    @GetMapping
    public List<Settings> getSettings(){
        return service.getSettings();
    }

    @PostMapping
    public Settings save(@RequestBody Settings settings){
        return service.save(settings);
    }
}