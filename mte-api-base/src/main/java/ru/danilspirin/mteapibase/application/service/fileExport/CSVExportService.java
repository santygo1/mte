package ru.danilspirin.mteapibase.application.service.fileExport;

import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
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

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.LinkedList;
import java.util.List;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class CSVExportService implements ExportService {

    TrajectoryRepository trajectoryRepository;
    VesselRepository vesselRepository;

    @Override
    public InputStreamResource getFile() throws IOException, CsvRequiredFieldEmptyException, CsvDataTypeMismatchException {
        List<TrajectoryModel> trajectories = trajectoryRepository.findAll();
        List<VesselModel> vessels = vesselRepository.findAll();

        List<ResultEntity> resultEntities = new LinkedList<>();
        for(TrajectoryModel t : trajectories){
            VesselModel vessel = vessels.stream().filter((v) -> v.getVesselId().equals(t.getVesselId()))
                    .findFirst()
                    .orElse(new VesselModel());
            t.getCoordinates().forEach((c) -> resultEntities.add(new ResultEntity(vessel,c)));
        }

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        Writer writer = null;
        writer = new OutputStreamWriter(outputStream, StandardCharsets.UTF_8);
        CSVWriter csvWriter = new CSVWriter(writer, CSVWriter.DEFAULT_SEPARATOR, CSVWriter.NO_QUOTE_CHARACTER, CSVWriter.DEFAULT_ESCAPE_CHARACTER, CSVWriter.DEFAULT_LINE_END);

        StatefulBeanToCsv<ResultEntity> beanToCsv = new StatefulBeanToCsvBuilder<ResultEntity>(csvWriter)
                .withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
                .withSeparator(CSVWriter.DEFAULT_SEPARATOR)
                .build();

        beanToCsv.write(resultEntities);

        csvWriter.close();

        return new InputStreamResource(new ByteArrayInputStream(outputStream.toByteArray()));
    }
}
