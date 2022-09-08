package com.kacwol.ravintolaAPI.controller;

import com.kacwol.ravintolaAPI.reservation.ReservationCreateDto;
import com.kacwol.ravintolaAPI.reservation.ReservationResponseDto;
import com.kacwol.ravintolaAPI.reservation.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","https://ravintola.herokuapp.com"})
@RequestMapping("reservation")
public class ReservationController {

    private final ReservationService service;

    @Autowired
    public ReservationController(ReservationService service) {
        this.service = service;
    }

    @GetMapping
    public List<ReservationResponseDto> getReservations() {
        return service.getReservations();
    }


    @PostMapping
    public void makeReservation(@RequestBody ReservationCreateDto dto){
        service.addReservation(dto);
    }

}
