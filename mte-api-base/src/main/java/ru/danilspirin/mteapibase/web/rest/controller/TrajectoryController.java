package ru.danilspirin.mteapibase.web.rest.controller;


import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.danilspirin.mteapibase.web.rest.dto.requests.TrajectoryCreateRequest;
import ru.danilspirin.mteapibase.web.rest.dto.responses.TrajectoryResponse;
import ru.danilspirin.mteapibase.exception.TrajectoryNotFound;
import ru.danilspirin.mteapibase.model.Trajectory;
import ru.danilspirin.mteapibase.service.TrajectoryService;
import ru.danilspirin.mteapibase.web.rest.dto.converters.TrajectoryConverter;

import java.util.List;

@RestController
@RequestMapping("/api/v1/trajectories")
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TrajectoryController {

    TrajectoryService trajectoryService;
    TrajectoryConverter trajectoryConverter;

    @GetMapping
    ResponseEntity<List<TrajectoryResponse>> getAll() {
        List<Trajectory> trajectories = trajectoryService.getAllTrajectories();

        return ResponseEntity.ok(
                trajectories.stream()
                        .map(trajectoryConverter::toResponse)
                        .toList());
    }

    @GetMapping("/{trajectoryId}")
    ResponseEntity<TrajectoryResponse> getById(@PathVariable("trajectoryId") String id) {
        Trajectory trajectory = trajectoryService
                .getTrajectoryById(id)
                .orElseThrow(() -> new TrajectoryNotFound(id));

        return ResponseEntity.ok(trajectoryConverter.toResponse(trajectory));
    }

    @PostMapping("")
    ResponseEntity<TrajectoryResponse> createTrajectory(@RequestBody @Valid TrajectoryCreateRequest trajectory) {
        Trajectory created = trajectoryService.addTrajectory(trajectoryConverter.toEntity(trajectory));

        return ResponseEntity.ok(trajectoryConverter.toResponse(created));
    }
}
