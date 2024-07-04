package ru.danilspirin.mteapibase.application.service.fileExport;

import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;
import org.springframework.core.io.InputStreamResource;

import java.io.IOException;

public interface ExportService {
    InputStreamResource getFile() throws CsvRequiredFieldEmptyException, CsvDataTypeMismatchException, IOException;
}
