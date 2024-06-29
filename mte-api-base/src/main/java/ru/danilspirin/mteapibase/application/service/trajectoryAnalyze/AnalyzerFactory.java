package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

public class AnalyzerFactory {

    public Analyzer getAnalyzerByMethod(AnalyzeMethod method){
        return switch (method){
            case TRAFFIC -> new TrafficAnalyzer();
            case MAIN_AREAS -> new MainAreaAnalyzer();
            default -> throw new AssertionError("Подходящий метод для анализа не найден");
        };
    }
}
