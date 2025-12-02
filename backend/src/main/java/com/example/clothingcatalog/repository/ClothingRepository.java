package com.example.clothingcatalog.repository;

import com.example.clothingcatalog.model.Clothing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClothingRepository extends JpaRepository<Clothing, Long> {
}