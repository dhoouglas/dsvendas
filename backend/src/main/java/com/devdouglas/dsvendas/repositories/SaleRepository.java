package com.devdouglas.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devdouglas.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
