package ru.danilspirin.mteapibase.application.service.fileExport;

import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.core.io.InputStreamResource;
import org.springframework.stereotype.Service;
import ru.danilspirin.mteapibase.application.model.trajectory.TrajectoryModel;
import ru.danilspirin.mteapibase.application.model.vessel.VesselModel;
import ru.danilspirin.mteapibase.application.repository.TrajectoryRepository;
import ru.danilspirin.mteapibase.application.repository.VesselRepository;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class ExcelExportService implements ExportService {

    TrajectoryRepository trajectoryRepository;
    VesselRepository vesselRepository;

    @Override
    public InputStreamResource getFile() throws IOException, CsvRequiredFieldEmptyException, CsvDataTypeMismatchException {
        List<TrajectoryModel> trajectories = trajectoryRepository.findAll();
        List<VesselModel> vessels = vesselRepository.findAll();

        List<ResultEntity> resultEntities = new LinkedList<>();
        for (TrajectoryModel t : trajectories) {
            VesselModel vessel = vessels.stream().filter((v) -> v.getVesselId().equals(t.getVesselId()))
                    .findFirst()
                    .orElse(new VesselModel());
            t.getCoordinates().forEach((c) -> resultEntities.add(new ResultEntity(vessel, c)));
        }

        // Создаем книгу Excel
        Workbook workbook = new XSSFWorkbook(); // Для формата .xlsx
        Sheet sheet = workbook.createSheet("TrajectoryData");

        // Заголовки столбцов
        Row headerRow = sheet.createRow(0);
        List<String> headers = resultEntities.getFirst().getValuesMap().keySet().stream().toList();
        for (int i = 0; i < headers.size(); i++) {
            headerRow.createCell(i).setCellValue(headers.get(i));
        }

        // Заполняем строки данными
        int rowNum = 1;
        for (ResultEntity resultEntity : resultEntities) {
            Row row = sheet.createRow(rowNum++);
            for (int i = 0; i < headers.size(); i++) {
                row.createCell(i).setCellValue(String.valueOf(resultEntity.getValuesMap().get(headers.get(i))));
            }
        }

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        workbook.write(outputStream);
        workbook.close();

        return new InputStreamResource(new ByteArrayInputStream(outputStream.toByteArray()));
    }
}