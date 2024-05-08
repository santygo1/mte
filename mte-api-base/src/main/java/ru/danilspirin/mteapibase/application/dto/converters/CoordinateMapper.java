package ru.danilspirin.mteapibase.application.dto.converters;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import ru.danilspirin.mteapibase.application.dto.requests.CoordinateRequest;
import ru.danilspirin.mteapibase.application.dto.responses.CoordinateResponse;
import ru.danilspirin.mteapibase.application.model.Coordinate;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
interface CoordinateMapper {

    Coordinate toEntity(CoordinateRequest request);

    CoordinateResponse toResponse(Coordinate entity);
}
