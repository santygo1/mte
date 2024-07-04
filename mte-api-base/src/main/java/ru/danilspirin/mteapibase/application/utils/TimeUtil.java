package ru.danilspirin.mteapibase.application.utils;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class TimeUtil {

    public static final String OUTER_TIME_PATTERN = "MM/dd/yyyy HH:mm:ss"; // 2/19/2016 17:54
    public static final String INNER_TIME_PATTERNS = "[M/d/yyyy H:m]" +
            "[MM/dd/yyyy H:m]" +
            "[M/dd/yyyy HH:mm]" +
            "[" + OUTER_TIME_PATTERN + "]" +
            "[yyyy-mm-dd'T'HH:mm]";
    private static final DateTimeFormatter INNER_FORMATTER = DateTimeFormatter.ofPattern(INNER_TIME_PATTERNS);
    private static final DateTimeFormatter OUTER_FORMATTER = DateTimeFormatter.ofPattern(OUTER_TIME_PATTERN);


    public static String fromTimestampToString(Timestamp time){
        return OUTER_FORMATTER.format(time.toLocalDateTime());
    }

    public static Timestamp fromStringToTimestamp(String time) {
        return Timestamp.valueOf(LocalDateTime.parse(time, INNER_FORMATTER));
    }
}
