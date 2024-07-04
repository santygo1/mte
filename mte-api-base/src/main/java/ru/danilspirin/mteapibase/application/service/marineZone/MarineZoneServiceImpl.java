package ru.danilspirin.mteapibase.application.service.marineZone;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.danilspirin.mteapibase.application.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.application.converters.MarineZoneConverter;
import ru.danilspirin.mteapibase.application.dto.MarineZoneDto;
import ru.danilspirin.mteapibase.application.exception.MarineZoneNotFound;
import ru.danilspirin.mteapibase.application.repository.MarineZoneRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class MarineZoneServiceImpl implements MarineZoneService {

    MarineZoneRepository repository;
    MarineZoneConverter converter;

    @Override
    public List<MarineZoneDto> getAll() {
        return repository.findAll().stream()
                .map(converter::toDto)
                .toList();
    }

    @Override
    public MarineZoneDto getById(String marineId) {
        return converter.toDto(repository.findById(marineId)
                        .orElseThrow(() -> new MarineZoneNotFound(marineId)
                        ));
    }

    @Transactional
    @Override
    public MarineZoneDto create(MarineZoneDto marineZoneDto) {
        return converter.toDto(repository.save(converter.toModel(marineZoneDto)));
    }

    @Override
    public void delete(String marineZoneID) {
        repository.deleteById(marineZoneID);
    }
}
