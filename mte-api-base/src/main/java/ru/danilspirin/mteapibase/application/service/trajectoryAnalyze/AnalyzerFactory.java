package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

import ru.danilspirin.mteapibase.application.service.trajectoryAnalyze.analyzers.Analyzer;
import ru.danilspirin.mteapibase.application.service.trajectoryAnalyze.analyzers.AnalyzerImpl;
import ru.danilspirin.mteapibase.application.service.trajectoryAnalyze.analyzers.TrafficAnalyzer;

public class AnalyzerFactory {

    public Analyzer getAnalyzerByMethod(AnalyzeMethod method){
        return switch (method){
            case TRAFFIC -> new TrafficAnalyzer();
            case MAIN_AREAS -> new AnalyzerImpl();
        };
    }
}
