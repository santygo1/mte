package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;

@Getter
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HttpExceptionHandler extends RuntimeException {
    HttpStatus status;
    String code;

    HttpExceptionHandler(String msg, HttpStatus status, String code) {
        super(msg);
        this.status = status;
        this.code = code;
    }

}
