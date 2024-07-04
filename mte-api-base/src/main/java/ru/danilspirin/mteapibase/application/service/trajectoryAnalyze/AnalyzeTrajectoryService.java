package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import ru.danilspirin.mteapibase.application.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.application.converters.AnalyzeTrajectoryConverter;
import ru.danilspirin.mteapibase.application.dto.AnalyzedTrajectoryDto;
import ru.danilspirin.mteapibase.application.model.trajectory.AnalyzedTrajectory;
import ru.danilspirin.mteapibase.application.repository.TrajectoryRepository;

import java.sql.Timestamp;
import java.util.List;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class AnalyzeTrajectoryService {

    TrajectoryRepository repository;
    AnalyzeTrajectoryConverter converter;


    @LogExecutionTime
    public List<AnalyzedTrajectoryDto> analyzeAllTrajectories(double radius, boolean interpolation, Timestamp dateFrom, Timestamp dateTo) {
        Analyzer analyzer = new JTSAnalyzerImpl(radius, interpolation ? 100: 0);
        if (dateFrom != null && dateTo != null && dateTo.after(dateFrom)){
            analyzer = analyzer
                    .withCoordinateFilter((c) -> c.getTimestamp().before(dateTo) && c.getTimestamp().after(dateFrom));
        }
        List<AnalyzedTrajectory> analyzedTrajectories = analyzer.analyze(repository.findAll());

        return analyzedTrajectories.stream()
                .map(converter::toDto)
                .toList();
    }
}
