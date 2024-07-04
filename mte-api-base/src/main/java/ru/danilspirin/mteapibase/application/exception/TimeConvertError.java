package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import ru.danilspirin.mteapibase.application.dto.errors.ErrorConstants;
import ru.danilspirin.mteapibase.application.utils.TimeUtil;

@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TimeConvertError extends HttpExceptionHandler {
    public TimeConvertError(String time) {
        super(
                String.format(STR."Дата должна быть в формате \{TimeUtil.INNER_TIME_PATTERNS}. Получено \{time}"),
                HttpStatus.NOT_FOUND,
                ErrorConstants.ERR_TRAJECTORY_NOT_FOUND
        );
    }
}
