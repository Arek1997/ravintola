package com.kacwol.ravintolaAPI.reservation.service;

import com.kacwol.ravintolaAPI.reservation.Reservation;
import com.kacwol.ravintolaAPI.reservation.ReservationCreateDto;
import com.kacwol.ravintolaAPI.reservation.ReservationDetailsDto;
import com.kacwol.ravintolaAPI.reservation.ReservationResponseDto;
import com.kacwol.ravintolaAPI.seattable.SeatTable;
import com.kacwol.ravintolaAPI.seattable.SeatTableDto;
import org.springframework.stereotype.Component;

@Component
public class ReservationMapper {

    public Reservation dtoToEntity(ReservationCreateDto dto, SeatTable table) {
        return Reservation.builder()
                .name(dto.getName())
                .surname(dto.getSurname())
                .email(dto.getEmail())
                .table(table)
                .peopleAmount(dto.getPeopleAmount())
                .dateTime(dto.getDateTime())
                .build();
    }

    public ReservationResponseDto entityToDto(Reservation entity) {
        return new ReservationResponseDto(
                entity.getId(),
                entity.getPeopleAmount(),
                entity.getDateTime(),
                entity.getTable().getId()
        );
    }

    public ReservationDetailsDto entityToDetailsDto(Reservation entity) {
        return new ReservationDetailsDto(
                entity.getName(),
                entity.getSurname(),
                entity.getEmail(),
                entity.getPeopleAmount(),
                entity.getDateTime(),
                entity.getTable().getId(),
                new SeatTableDto(
                        entity.getTable().getMinSeats(),
                        entity.getTable().getMaxSeats()
                )
        );

    }


}
