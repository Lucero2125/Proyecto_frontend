package com.example.clothingcatalog.controller;

import com.example.clothingcatalog.model.Clothing;
import com.example.clothingcatalog.service.ClothingService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clothing")
@CrossOrigin(origins = "*")
public class ClothingController {
    @Autowired
    private ClothingService clothingService;

    @GetMapping
    public List<Clothing> getAllClothing() {
        return clothingService.getAllClothing();
    }

    @GetMapping("/{id}")
    public Clothing getClothingById(@PathVariable Long id) {
        return clothingService.getClothingById(id);
    }

    @PostMapping
    public Clothing createClothing(@RequestBody Clothing clothing) {
        return clothingService.saveClothing(clothing);
    }

    @PutMapping("/{id}")
    public Clothing updateClothing(@PathVariable Long id, @RequestBody Clothing clothing) {
        clothing.setId(id);
        return clothingService.saveClothing(clothing);
    }

    @DeleteMapping("/{id}")
    public void deleteClothing(@PathVariable Long id) {
        clothingService.deleteClothing(id);
    }
}