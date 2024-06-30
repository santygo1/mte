package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

import ru.danilspirin.mteapibase.application.exception.UnsupportedAnalyzeMethod;

public enum AnalyzeMethod {
    TRAFFIC,
    MAIN_AREAS;

    public static AnalyzeMethod getMethodByName(String method){
        return switch (method){
            case "analyzeTraffic" -> TRAFFIC;
            case "analyzeMainAreas" -> MAIN_AREAS;
            default -> throw new UnsupportedAnalyzeMethod(method);
        };
    }
}
