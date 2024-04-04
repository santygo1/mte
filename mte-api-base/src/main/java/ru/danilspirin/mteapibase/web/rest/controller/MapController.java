package ru.danilspirin.mteapibase.web.rest.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.danilspirin.mteapibase.web.rest.dto.responses.TrajectoryResponse;
import ru.danilspirin.mteapibase.model.Trajectory;
import ru.danilspirin.mteapibase.service.MapService;
import ru.danilspirin.mteapibase.web.rest.dto.converters.TrajectoryConverter;

import java.util.List;

@RestController
@RequestMapping("/api/v1/map/trajectories")
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class MapController {

    MapService mapService;
    TrajectoryConverter trajectoryConverter;

    @GetMapping
    public ResponseEntity<List<TrajectoryResponse>> getTrajectoryInCoordinateRanges(
            @RequestParam Double lonFrom,
            @RequestParam Double lonTo,
            @RequestParam Double latFrom,
            @RequestParam Double latTo
    ) {
        List<Trajectory> trajectories = mapService.getTrajectoriesInCoordinates(lonFrom, lonTo, latFrom, latTo);

        return ResponseEntity.ok(
                trajectories.stream().map(trajectoryConverter::toResponse).toList()
        );
    }
}
