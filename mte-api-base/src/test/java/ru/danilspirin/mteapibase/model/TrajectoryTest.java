package ru.danilspirin.mteapibase.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TrajectoryTest {
// TODO: uncomment
//    @Test
//    void givenTrajectoryMapWith_whenCreateObject_thenFieldsAreEquals() {
//        Map<String, Object> trajectoryMap = new HashMap<>() {{
//            put("vesselId", "asdasd");
//            put("from", "Port1");
//            put("to", "Port2");
//            put("lat", 123.12);
//            put("lon", 123.12);
//            put("timestamp", "12.12.32T02:22:22");
//            put("speed", 100.10);
//            put("heading", 100.2);
//        }};
//
//
//        Trajectory trajectory = Trajectory.newBuilder()
//                .vesselId(String.valueOf(trajectoryMap.get("vesselId")))
//                .from(String.valueOf(trajectoryMap.get("from")))
//                .to(String.valueOf(trajectoryMap.get("to")))
//                .setCoordinates(List.of(new Coordinate(
//                        (Double) trajectoryMap.get("lat"),
//                        (Double) trajectoryMap.get("lon"),
//                        (String) trajectoryMap.get("timestamp"),
//                        (Double) trajectoryMap.get("speed"),
//                        (Double) trajectoryMap.get("heading")
//                )))
//                .build();
//
//
//        System.out.println(trajectory);
//        assertEquals(trajectory.getVesselId(), trajectoryMap.get("vesselId"));
//        assertEquals(trajectory.getFrom(), trajectoryMap.get("from"));
//        assertEquals(trajectory.getTo(), trajectoryMap.get("to"));
//    }

//    @Test
//    void givenTrajectoryWith2EqualsCoordinates_whenCreate_thenObjectSaveOnlyOne() {
//        Map<String, Object> trajectoryMap = new HashMap<>() {{
//            put("vesselId", "asdasd");
//            put("from", "Port1");
//            put("to", "Port2");
//            put("lat1", 123.12);
//            put("lon1", 123.12);
//            put("timestamp1", "12.12.32T02:22:22");
//            put("speed1", 100.10);
//            put("heading1", 100.2);
//
//            put("lat2", 123.12);
//            put("lon2", 123.12);
//            put("timestamp2", "12.12.32T02:22:22");
//            put("speed2", 100.10);
//            put("heading2", 100.2);
//        }};
//
//        Trajectory trajectory = Trajectory.newBuilder()
//                .vesselId(String.valueOf(trajectoryMap.get("vesselId")))
//                .from(String.valueOf(trajectoryMap.get("from")))
//                .to(String.valueOf(trajectoryMap.get("to")))
//                .setCoordinates(List.of(
//                        new Coordinate(
//                                (Double) trajectoryMap.get("lat1"),
//                                (Double) trajectoryMap.get("lon1"),
//                                (String) trajectoryMap.get("timestamp1"),
//                                (Double) trajectoryMap.get("speed1"),
//                                (Double) trajectoryMap.get("heading1")
//                        ),
//                        new Coordinate(
//                                (Double) trajectoryMap.get("lat2"),
//                                (Double) trajectoryMap.get("lon2"),
//                                (String) trajectoryMap.get("timestamp2"),
//                                (Double) trajectoryMap.get("speed2"),
//                                (Double) trajectoryMap.get("heading2")
//                        )
//                ))
//                .build();
//
//        System.out.println(trajectory);
//        assertEquals(trajectory.getCoordinates().size(), 1);
//    }

//    @Test
//    void givenTrajectoryWith2NotEqualsCoordinates_whenCreate_thenObjectSaveOne() {
//        Map<String, Object> trajectoryMap = new HashMap<>() {{
//            put("vesselId", "asdasd");
//            put("from", "Port1");
//            put("to", "Port2");
//            put("lat1", 123.12);
//            put("lon1", 123.12);
//            put("timestamp1", "12.12.32T02:22:22");
//            put("speed1", 100.10);
//            put("heading1", 100.2);
//
//            put("lat2", 11.0);
//            put("lon2", 11.0);
//            put("timestamp2", "12.12.32T02:22:22");
//            put("speed2", 100.10);
//            put("heading2", 100.2);
//        }};
//
//        Trajectory trajectory = Trajectory.newBuilder()
//                .vesselId(String.valueOf(trajectoryMap.get("vesselId")))
//                .from(String.valueOf(trajectoryMap.get("from")))
//                .to(String.valueOf(trajectoryMap.get("to")))
//                .setCoordinates(List.of(
//                        new Coordinate(
//                                (Double) trajectoryMap.get("lat1"),
//                                (Double) trajectoryMap.get("lon1"),
//                                (String) trajectoryMap.get("timestamp1"),
//                                (Double) trajectoryMap.get("speed1"),
//                                (Double) trajectoryMap.get("heading1")
//                        ),
//                        new Coordinate(
//                                (Double) trajectoryMap.get("lat2"),
//                                (Double) trajectoryMap.get("lon2"),
//                                (String) trajectoryMap.get("timestamp2"),
//                                (Double) trajectoryMap.get("speed2"),
//                                (Double) trajectoryMap.get("heading2")
//                        )
//                ))
//                .build();
//
//        System.out.println(trajectory);
//        assertEquals(trajectory.getCoordinates().size(), 2);
//    }

}