package ru.danilspirin.mteapibase.application.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import ru.danilspirin.mteapibase.application.model.Trajectory;

import java.util.List;

public interface TrajectoryRepository extends MongoRepository<Trajectory, String> {

    // Returns  trajectory which coordinates between lat and lon range
    @Query("{'coordinates.lon': { $gte: ?0, $lte: ?1}, 'coordinates.lat': {$gte: ?2, $lte: ?3}}")
    List<Trajectory> getTrajectoriesInCoordinates(double lonFrom, double lonTo, double latFrom, double latTo);
}
