package ru.danilspirin.mteapibase.application.controller;


import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import ru.danilspirin.mteapibase.application.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.application.dto.TrajectoryDto;
import ru.danilspirin.mteapibase.application.dto.requests.TrajectoryCreateRequest;
import ru.danilspirin.mteapibase.application.dto.requests.TrajectoryUpdateRequest;
import ru.danilspirin.mteapibase.application.dto.responses.TrajectoryResponse;
import ru.danilspirin.mteapibase.application.exception.HttpExceptionHandler;
import ru.danilspirin.mteapibase.application.exception.TrajectoryNotFound;
import ru.danilspirin.mteapibase.application.service.TrajectoryService;
import ru.danilspirin.mteapibase.application.converters.TrajectoryConverter;

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
        List<TrajectoryDto> trajectories = trajectoryService.getAllTrajectories();

        return ResponseEntity.ok(
                trajectories.stream()
                        .map(trajectoryConverter::toResponse)
                        .toList());
    }

    @GetMapping("/{trajectoryId}")
    ResponseEntity<TrajectoryResponse> getById(
            @PathVariable("trajectoryId") String id
    ) {
        TrajectoryDto trajectoryModel = trajectoryService
                .getTrajectoryById(id)
                .orElseThrow(() -> new TrajectoryNotFound(id));

        return ResponseEntity.ok(trajectoryConverter.toResponse(trajectoryModel));
    }

    @PostMapping
    ResponseEntity<TrajectoryResponse> createTrajectory(
            @RequestBody @Valid TrajectoryCreateRequest trajectory
    ) {
        TrajectoryDto created = trajectoryService.addTrajectory(trajectoryConverter.toDto(trajectory));

        return ResponseEntity
                .created(
                        ServletUriComponentsBuilder
                                .fromCurrentRequest()
                                .path("/{id}")
                                .buildAndExpand(created.getTrajectoryId())
                                .toUri()
                )
                .body(trajectoryConverter.toResponse(created));
    }

    @PutMapping("/{trajectoryId}")
    ResponseEntity<TrajectoryResponse> updateTrajectory(
            @RequestBody @Valid TrajectoryUpdateRequest trajectoryUpdateRequest,
            @PathVariable String trajectoryId
    ) {
        TrajectoryDto dto = trajectoryService.updateTrajectory(trajectoryId, trajectoryConverter.toDto(trajectoryUpdateRequest));
        TrajectoryResponse response = trajectoryConverter.toResponse(dto);
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return dto.isCreated() ?
                ResponseEntity.created(
                                ServletUriComponentsBuilder
                                        .fromCurrentRequest()
                                        .build().toUri()
                        )
                        .body(response) :
                ResponseEntity.ok(response);
    }

    @DeleteMapping("/{trajectoryId}")
    ResponseEntity<Void> deleteTrajectoryById(
            @PathVariable String trajectoryId
    ) {
        trajectoryService.deleteTrajectory(trajectoryId);
        return ResponseEntity.noContent().build();
    }

    // Пользовательский запрос, проверки корректности новой координаты траектории
    @PostMapping("/{trajectoryId}/checkCoordinate")
    ResponseEntity<Void> checkNewCoordinateTrajectory(@PathVariable String trajectoryId){
        // TODO: заглушка проверки координаты
        String newTrajectoryId = trajectoryId + "1214";
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

//        TrajectoryDto trajectoryModel = trajectoryService
//                .getTrajectoryById(newTrajectoryId)
//                .orElseThrow(() -> new TrajectoryNotFound(newTrajectoryId));

        return ResponseEntity.ok().build();
    }
}
