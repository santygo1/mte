package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;

@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TrajectoryNotFound extends HttpExceptionHandler {
    public TrajectoryNotFound(String trajectoryId) {
        super(
                String.format("Траектория с id %s не найдена!", trajectoryId),
                HttpStatus.NOT_FOUND
        );
    }
}
