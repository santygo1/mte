package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import ru.danilspirin.mteapibase.application.dto.errors.ErrorConstants;

@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UnsupportedAnalyzeMethod extends HttpExceptionHandler {

    public UnsupportedAnalyzeMethod(String method) {
        super(
                String.format("Метод %s не поддерживается для анализа!", method),
                HttpStatus.NOT_FOUND,
                ErrorConstants.ERR_TRAJECTORY_NOT_FOUND
        );
    }
}