package ru.danilspirin.mteapibase.application.dto.errors;

public final class ErrorConstants {

    public static final String ERR_VALIDATION = "error.validation";
    public static final String ERR_METHOD_NOT_SUPPORTED = "error.methodNotSupported";
    public static final String ERR_INTERNAL_SERVER_ERROR = "error.internalServerError";
    public static final String ERR_TRAJECTORY_NOT_FOUND = "error.ERR_TRAJECTORY_NOT_FOUND";
    public static final String ERR_ANALYZE_METHOD_NOT_SUPPORTED = "error.unsupportedAnalyzeMethod";
    public static final String ERR_WRONG_DATE_FORMAT = "error.wrongDateFormat";
    public static final String ERR_UNSUPPORTED_EXPORT_FILE_FORMAT ="error.unsupportedExportFileFormat";
    public static final String ERR_EXPORT_ERROR = "error.exportError";
    public static final String ERR_MARINE_ZONE_NOT_FOUND = "error.marineZoneNotFound";

    private ErrorConstants() {
    }

}
