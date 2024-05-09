package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;

@Getter
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HttpExceptionHandler extends RuntimeException {
    HttpStatus status;

    HttpExceptionHandler(String msg, HttpStatus status) {
        super(msg);
        this.status = status;
    }

}
