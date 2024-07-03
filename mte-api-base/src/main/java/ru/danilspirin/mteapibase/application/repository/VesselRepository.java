package ru.danilspirin.mteapibase.application.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ru.danilspirin.mteapibase.application.model.vessel.VesselModel;

public interface VesselRepository extends MongoRepository<VesselModel, String> {
}
