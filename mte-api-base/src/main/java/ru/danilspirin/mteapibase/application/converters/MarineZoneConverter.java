package ru.danilspirin.mteapibase.application.converters;


import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import ru.danilspirin.mteapibase.application.dto.MarineZoneDto;
import ru.danilspirin.mteapibase.application.dto.requests.MarineZoneRequest;
import ru.danilspirin.mteapibase.application.dto.responses.MarineZoneResponse;
import ru.danilspirin.mteapibase.application.model.MarineZone;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE
)
public interface MarineZoneConverter {
    MarineZoneDto toDto(MarineZoneRequest request);

    MarineZoneResponse toResponse(MarineZoneDto dto);

    MarineZoneDto toDto(MarineZone model);

    MarineZone toModel(MarineZoneDto dto);
}
