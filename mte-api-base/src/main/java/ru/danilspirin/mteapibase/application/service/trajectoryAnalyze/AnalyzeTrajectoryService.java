package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import ru.danilspirin.mteapibase.application.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.application.converters.AnalyzeTrajectoryConverter;
import ru.danilspirin.mteapibase.application.dto.AnalyzedTrajectoryDto;
import ru.danilspirin.mteapibase.application.model.AnalyzedTrajectory;
import ru.danilspirin.mteapibase.application.repository.TrajectoryRepository;

import java.util.List;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class AnalyzeTrajectoryService {

    TrajectoryRepository repository;
    AnalyzeTrajectoryConverter converter;


    @LogExecutionTime
    public List<AnalyzedTrajectoryDto> analyzeAllTrajectories(String method) {
        Analyzer analyzer = new JTSAnalyzerImpl(0.4, 100);
        List<AnalyzedTrajectory> analyzedTrajectories = analyzer.analyze(repository.findAll());

        return analyzedTrajectories.stream()
                .map(converter::toDto)
                .toList();
    }
}
