package ru.danilspirin.mteapibase.exception;

import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import ru.danilspirin.mteapibase.web.rest.dto.responses.errors.ErrorConstants;
import ru.danilspirin.mteapibase.web.rest.dto.responses.errors.ErrorResponse;

import java.util.List;

@ControllerAdvice
public class HttpExceptionTranslator {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    public ErrorResponse processValidationError(MethodArgumentNotValidException ex) {
        BindingResult result = ex.getBindingResult();
        List<FieldError> fieldErrors = result.getFieldErrors();

        return processFieldErrors(fieldErrors);
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public ErrorResponse processMethodNotSupportedException(HttpRequestMethodNotSupportedException exception) {
        return new ErrorResponse(ErrorConstants.ERR_METHOD_NOT_SUPPORTED, exception.getMessage());
    }

    private ErrorResponse processFieldErrors(List<FieldError> fieldErrors) {
        ErrorResponse response = new ErrorResponse(ErrorConstants.ERR_VALIDATION);

        for (FieldError fieldError : fieldErrors) {
            response.add(fieldError.getObjectName(), fieldError.getField(), fieldError.getCode());
        }

        return response;
    }
}
