package ru.danilspirin.mteapibase.application.converters;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import ru.danilspirin.mteapibase.application.dto.responses.VesselResponse;
import ru.danilspirin.mteapibase.application.model.vessel.VesselModel;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface VesselConverter {
    VesselResponse toResponse(VesselModel model);
}
