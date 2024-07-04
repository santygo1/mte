package ru.danilspirin.mteapibase.application.exception;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import ru.danilspirin.mteapibase.application.dto.errors.ErrorConstants;

@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UnsupportedExportFileFormat extends HttpExceptionHandler {
    public UnsupportedExportFileFormat(String format) {
        super(
                String.format("Формат %s не поддерживается для экспорта!", format),
                HttpStatus.UNSUPPORTED_MEDIA_TYPE,
                ErrorConstants.ERR_UNSUPPORTED_EXPORT_FILE_FORMAT
        );
    }
}
