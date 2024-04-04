package ru.danilspirin.mteapibase.web.rest.dto.responses.errors;

import lombok.Getter;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
public class ErrorResponse implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private final String message;
    private final String description;

    private List<FieldErrorResponse> fieldErrors;

    public ErrorResponse(String message) {
        this(message, null);
    }

    public ErrorResponse(String message, String description) {
        this.message = message;
        this.description = description;
    }

    public ErrorResponse(String message, String description, List<FieldErrorResponse> fieldErrors) {
        this.message = message;
        this.description = description;
        this.fieldErrors = fieldErrors;
    }

    public void add(String objectName, String field, String message) {
        if (fieldErrors == null) {
            fieldErrors = new ArrayList<>();
        }
        fieldErrors.add(new FieldErrorResponse(objectName, field, message));
    }

}