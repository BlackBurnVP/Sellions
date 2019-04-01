package com.example.Sellions.repos;

import com.example.Sellions.domen.Tv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface TvRepo extends JpaRepository<Tv,Long> {

    Tv findById(Integer id);

    @Transactional
    List<Tv> removeByBrand(String brand);

    @Transactional
    List<Tv> removeByModel(String model);

    @Transactional
    Tv removeById(Integer id);

    List<Tv> findByOrderByIdAsc();
}
