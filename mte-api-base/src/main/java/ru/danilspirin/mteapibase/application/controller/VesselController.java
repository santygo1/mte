package ru.danilspirin.mteapibase.application.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.danilspirin.mteapibase.application.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.application.converters.VesselConverter;
import ru.danilspirin.mteapibase.application.dto.responses.VesselResponse;
import ru.danilspirin.mteapibase.application.exception.VesselNotFound;
import ru.danilspirin.mteapibase.application.model.vessel.VesselModel;
import ru.danilspirin.mteapibase.application.repository.VesselRepository;


@RestController
@RequestMapping("/api/v1/vessels")
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class VesselController {

    VesselRepository repository;
    VesselConverter converter;

    @LogExecutionTime
    @GetMapping("/{vesselId}")
    public ResponseEntity<VesselResponse> getById(@PathVariable String vesselId){
        VesselModel vessel = repository.findById(vesselId).orElseThrow(() -> new VesselNotFound(vesselId));

        return ResponseEntity.ok(converter.toResponse(vessel));
    }

    @LogExecutionTime
    @PostMapping("")
    public ResponseEntity<VesselResponse> create(@RequestBody VesselModel request){
        VesselModel response = repository.save(request);
        return ResponseEntity.ok(converter.toResponse(response));
    }

}
