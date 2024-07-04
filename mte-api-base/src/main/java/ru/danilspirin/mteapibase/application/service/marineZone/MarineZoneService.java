package ru.danilspirin.mteapibase.application.service.marineZone;

import ru.danilspirin.mteapibase.application.dto.MarineZoneDto;

import java.util.List;

public interface MarineZoneService {

    List<MarineZoneDto> getAll();

    MarineZoneDto getById(String marineId);

    MarineZoneDto create(MarineZoneDto marineZone);

    void delete(String marineZoneID);

}
