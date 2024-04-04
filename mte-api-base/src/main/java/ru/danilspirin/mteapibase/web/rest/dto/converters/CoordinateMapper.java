package ru.danilspirin.mteapibase.web.rest.dto.converters;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import ru.danilspirin.mteapibase.web.rest.dto.requests.CoordinateRequest;
import ru.danilspirin.mteapibase.web.rest.dto.responses.CoordinateResponse;
import ru.danilspirin.mteapibase.model.Coordinate;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
interface CoordinateMapper {

    Coordinate toEntity(CoordinateRequest request);

    CoordinateResponse toResponse(Coordinate entity);
}
