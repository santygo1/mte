package ru.danilspirin.mteapibase.application.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import ru.danilspirin.mteapibase.application.converters.MarineZoneConverter;
import ru.danilspirin.mteapibase.application.dto.requests.MarineZoneRequest;
import ru.danilspirin.mteapibase.application.dto.responses.MarineZoneResponse;
import ru.danilspirin.mteapibase.application.service.marineZone.MarineZoneService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/marineZones")
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class MarineZoneController {

    MarineZoneService service;
    MarineZoneConverter converter;

    @PostMapping()
    public ResponseEntity<MarineZoneResponse> createMarineZone(@RequestBody MarineZoneRequest request) {
        MarineZoneResponse response = converter.toResponse(service.create(converter.toDto(request)));

        return ResponseEntity
                .created(ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(response.getMarineZoneId())
                        .toUri())
                .body(response);
    }

    @GetMapping()
    public ResponseEntity<List<MarineZoneResponse>> getAllMarineZones() {
        List<MarineZoneResponse> response = service.getAll().stream()
                .map(converter::toResponse)
                .toList();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MarineZoneResponse> getMarineZoneById(@PathVariable String id) {
        return ResponseEntity.ok(converter.toResponse(service.getById(id)));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMarineZoneById(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }


}
