package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import ru.danilspirin.mteapibase.application.dto.errors.ErrorConstants;

@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class VesselNotFound extends HttpExceptionHandler {
    public VesselNotFound(String vesselId) {
        super(
                String.format("Судно с id %s не найдено!", vesselId),
                HttpStatus.NOT_FOUND,
                ErrorConstants.ERR_TRAJECTORY_NOT_FOUND
        );
    }
}
