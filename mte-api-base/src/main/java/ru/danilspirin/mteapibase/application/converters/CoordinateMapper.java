package ru.danilspirin.mteapibase.application.converters;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import ru.danilspirin.mteapibase.application.dto.CoordinateDto;
import ru.danilspirin.mteapibase.application.dto.requests.CoordinateRequest;
import ru.danilspirin.mteapibase.application.dto.responses.CoordinateResponse;
import ru.danilspirin.mteapibase.application.model.CoordinateModel;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
interface CoordinateMapper {

    CoordinateDto toDto(CoordinateRequest request);

    CoordinateResponse toResponse(CoordinateDto dto);

    CoordinateDto toDto(CoordinateModel model);

    CoordinateModel toModel(CoordinateDto dto);

}
