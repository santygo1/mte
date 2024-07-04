package ru.danilspirin.mteapibase.application.converters;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import ru.danilspirin.mteapibase.application.dto.TrajectoryDto;
import ru.danilspirin.mteapibase.application.dto.requests.TrajectoryCreateRequest;
import ru.danilspirin.mteapibase.application.dto.requests.TrajectoryUpdateRequest;
import ru.danilspirin.mteapibase.application.dto.responses.TrajectoryResponse;
import ru.danilspirin.mteapibase.application.model.trajectory.TrajectoryModel;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE,
        uses = CoordinateMapper.class
)
public interface TrajectoryConverter {

    TrajectoryDto toDto(TrajectoryCreateRequest request);

    TrajectoryDto toDto(TrajectoryUpdateRequest request);

    TrajectoryResponse toResponse(TrajectoryDto dto);

    TrajectoryDto toDto(TrajectoryModel model);

    TrajectoryModel toModel(TrajectoryDto dto);
}
