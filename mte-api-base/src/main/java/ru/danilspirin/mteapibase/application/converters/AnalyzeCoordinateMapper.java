package ru.danilspirin.mteapibase.application.converters;


import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import ru.danilspirin.mteapibase.application.dto.AnalyzedCoordinateDto;
import ru.danilspirin.mteapibase.application.dto.responses.AnalyzedCoordinateResponse;
import ru.danilspirin.mteapibase.application.model.AnalyzedCoordinate;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)
interface AnalyzeCoordinateMapper {

    AnalyzedCoordinateResponse toResponse(AnalyzedCoordinateDto dto);

    default AnalyzedCoordinateDto toDto(AnalyzedCoordinate model){
        AnalyzedCoordinateDto dto = new AnalyzedCoordinateDto();
        dto.setLat(model.getLat());
        dto.setLon(model.getLon());
        dto.setColor(model.getIntensity().getColor());

        return dto;
    };

}