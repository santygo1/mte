package ru.danilspirin.mteapibase.application.service.fileExport;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;
import ru.danilspirin.mteapibase.application.exception.UnsupportedExportFileFormat;

@Component
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class ExportServiceFactory {

    CSVExportService CSVExportService;
    ExcelExportService excelExportService;

    public ExportService getService(String typeOfFile){
        return switch (typeOfFile.toLowerCase()){
            case "csv" -> CSVExportService;
            case "xlsx" -> excelExportService;
            default -> throw new UnsupportedExportFileFormat(typeOfFile);
        };
    }
}
