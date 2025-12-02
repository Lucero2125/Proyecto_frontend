package com.example.clothingcatalog.service;

import com.example.clothingcatalog.model.Clothing;
import com.example.clothingcatalog.repository.ClothingRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClothingService {
    @Autowired
    private ClothingRepository clothingRepository;

    public List<Clothing> getAllClothing() {
        return clothingRepository.findAll();
    }

    public Clothing getClothingById(Long id) {
        return clothingRepository.findById(id).orElse(null);
    }

    public Clothing saveClothing(Clothing clothing) {
        return clothingRepository.save(clothing);
    }

    public void deleteClothing(Long id) {
        clothingRepository.deleteById(id);
    }
}