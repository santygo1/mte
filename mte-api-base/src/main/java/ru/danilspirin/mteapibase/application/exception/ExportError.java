package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import ru.danilspirin.mteapibase.application.dto.errors.ErrorConstants;

@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ExportError extends HttpExceptionHandler {
    public ExportError() {
        super(
                "Произошла ошибка во время экспорта!",
                HttpStatus.BAD_GATEWAY,
                ErrorConstants.ERR_EXPORT_ERROR
        );
    }
}