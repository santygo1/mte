package ru.danilspirin.mteapibase.application.dto.converters;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import ru.danilspirin.mteapibase.application.dto.requests.TrajectoryCreateRequest;
import ru.danilspirin.mteapibase.application.dto.responses.TrajectoryResponse;
import ru.danilspirin.mteapibase.application.model.Trajectory;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE,
        uses = CoordinateMapper.class
)
public interface TrajectoryConverter {

    Trajectory toEntity(TrajectoryCreateRequest request);
    TrajectoryResponse toResponse(Trajectory entity);
}
