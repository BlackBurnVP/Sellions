package com.example.Sellions.controller;

import com.example.Sellions.domen.Tv;
import com.example.Sellions.repos.TvRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.Console;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class MainController {

    @Autowired
    TvRepo tvRepo;

    @RequestMapping("/tvs")
    public List<Tv> getAllTvs(){
        return tvRepo.findByOrderByIdAsc();
    }

    @PostMapping("/tvs")
    public Tv addTv(@Valid @RequestBody Tv tv){
        return tvRepo.save(tv);
    }

    @RequestMapping("/tvs/{id}")
    public ResponseEntity<Tv> getTvById(@PathVariable(value = "id") Integer tvId){
        Tv tv = tvRepo.findById(tvId);
        return ResponseEntity.ok().body(tv);
    }

    @PutMapping("/tvs/{id}")
    public List<Tv> updateTv(@PathVariable(value = "id") Integer tvId,
                                                   @Valid @RequestBody Tv tvDetails) {
        Tv tv = tvRepo.findById(tvId);

        tv.setModel(tvDetails.getModel());
        tv.setBrand(tvDetails.getBrand());
        tv.setColor(tvDetails.getColor());
        tv.setDisplay_technology(tvDetails.getDisplay_technology());
        tv.setRefresh_rate(tvDetails.getRefresh_rate());
        tv.setScreen_size(tvDetails.getScreen_size());
        tv.setInputs(tvDetails.getInputs());
        tv.setWeight(tvDetails.getWeight());
        tv.setCondition(tvDetails.getCondition());
        tv.setColor(tvDetails.getColor());
        final Tv updateTv = tvRepo.save(tv);
        return tvRepo.findByOrderByIdAsc();
    }

    @RequestMapping("/tvs/delete/{id}")
    public List<Tv> deleteEmployee(@PathVariable(value = "id") Integer id){
        System.out.println("DELETE");
//        Tv tv = tvRepo.findById(id);
        tvRepo.delete(tvRepo.findById(id));
//        Map<String, Boolean> response = new HashMap<>();
//        response.put("deleted", Boolean.TRUE);
//        return response;
        return tvRepo.findByOrderByIdAsc();
    }
}
