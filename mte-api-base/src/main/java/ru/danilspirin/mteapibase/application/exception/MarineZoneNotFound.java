package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import ru.danilspirin.mteapibase.application.dto.errors.ErrorConstants;

@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class MarineZoneNotFound extends HttpExceptionHandler{
    public MarineZoneNotFound() {
        super(
                "Не вводное пространство",
                HttpStatus.BAD_REQUEST,
                ErrorConstants.ERR_MARINE_ZONE_NOT_FOUND
        );
    }

    public MarineZoneNotFound(String id) {
        super(
                String.format("Вводное пространство с id %s не найдено", id),
                HttpStatus.NOT_FOUND,
                ErrorConstants.ERR_MARINE_ZONE_NOT_FOUND
        );
    }
}
