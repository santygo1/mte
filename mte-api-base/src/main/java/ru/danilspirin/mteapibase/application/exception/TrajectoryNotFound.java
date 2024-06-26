package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import ru.danilspirin.mteapibase.application.dto.errors.ErrorConstants;

@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TrajectoryNotFound extends HttpExceptionHandler {
    public TrajectoryNotFound(String trajectoryId) {
        super(
                String.format("Траектория с id %s не найдена!", trajectoryId),
                HttpStatus.NOT_FOUND,
                ErrorConstants.ERR_TRAJECTORY_NOT_FOUND
        );
    }
}
