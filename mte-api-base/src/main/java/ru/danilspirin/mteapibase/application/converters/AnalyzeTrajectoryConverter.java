package ru.danilspirin.mteapibase.application.converters;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import ru.danilspirin.mteapibase.application.dto.AnalyzedTrajectoryDto;
import ru.danilspirin.mteapibase.application.dto.responses.AnalyzedTrajectoryResponse;
import ru.danilspirin.mteapibase.application.model.AnalyzedTrajectory;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE,
        uses = AnalyzeCoordinateMapper.class
)
public interface AnalyzeTrajectoryConverter {
    AnalyzedTrajectoryResponse toResponse(AnalyzedTrajectoryDto dto);
    AnalyzedTrajectoryDto toDto(AnalyzedTrajectory model);
}
