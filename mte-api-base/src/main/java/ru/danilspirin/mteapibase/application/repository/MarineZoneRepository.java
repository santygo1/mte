package ru.danilspirin.mteapibase.application.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ru.danilspirin.mteapibase.application.model.MarineZone;

public interface MarineZoneRepository extends MongoRepository<MarineZone, String> {
}
