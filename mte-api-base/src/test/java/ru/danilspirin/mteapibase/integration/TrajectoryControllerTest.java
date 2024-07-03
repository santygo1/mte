package ru.danilspirin.mteapibase.integration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import ru.danilspirin.mteapibase.application.model.trajectory.CoordinateModel;
import ru.danilspirin.mteapibase.application.model.trajectory.TrajectoryModel;
import ru.danilspirin.mteapibase.application.repository.TrajectoryRepository;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class TrajectoryControllerTest {

    @MockBean
    private TrajectoryRepository repository;

    @Autowired
    private MockMvc mvc;

    Map<String, TrajectoryModel> trajectoryPool;

    // Настройка триггеров, которые срабатывают при выполнении методов из репозитория
    @BeforeEach
    void initRepositoryTriggers() {
        trajectoryPool = new HashMap<>();

        doAnswer(invocation -> {
                    TrajectoryModel model = invocation.getArgument(0, TrajectoryModel.class);

                    if (model.getTrajectoryId() == null) {
                        String id = UUID.randomUUID().toString();
                        model.setTrajectoryId(id);
                        trajectoryPool.put(id, model);
                    } else {
                        trajectoryPool.put(model.getTrajectoryId(), model);
                    }

                    return trajectoryPool.get(model.getTrajectoryId());
                }
        ).when(repository).save(any(TrajectoryModel.class));

        doAnswer(invocation -> {
            String id = invocation.getArgument(0, String.class);
            return Optional.of(trajectoryPool.get(id));
        }).when(repository).findById(anyString());

        doAnswer(invocationOnMock -> {
            trajectoryPool.remove(invocationOnMock.getArgument(0, String.class));
            return null;
        }).when(repository).deleteById(anyString());

        doAnswer((i) -> new ArrayList<>(trajectoryPool.values())).when(repository).findAll();

        doAnswer((i) -> trajectoryPool.containsKey(i.getArgument(0, String.class)))
                .when(repository).existsById(anyString());
    }

    @Test
    @DisplayName("TC-RT-001")
    void givenEmptyMap_whenCreateAndGetAll_thenReturnCreatedTrajectory() throws Exception {
        String trajectory = """
                {
                "vesselId": "asdasd",
                "from": "source",
                "to": "destination",
                "coordinates":[
                {"lat": 43.0905, "lon": 131.869, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0907, "lon": 131.869, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0908, "lon": 131.87, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0918, "lon": 131.871, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0928, "lon": 131.872, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.093, "lon": 131.872, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0925, "lon": 131.872, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5}
                ]
                }""";

        MvcResult addResult = mvc.perform(post("/api/v1/trajectories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(trajectory)
                )
                .andExpect(status().isCreated())
                .andReturn();

        MvcResult getResult = mvc.perform(get("/api/v1/trajectories")
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andReturn();

        assertEquals(
                addResult.getResponse().getContentAsString(),
                getResult.getResponse().getContentAsString()
                        .replaceAll("(^\\[)|(\\]$)", "") // Колхоз ну да ладно, убирает обертку-массив
        );
    }

    @Test
    @DisplayName("TC-RT-002")
    void methodDeleteIdempotentTest() throws Exception {
        String trajectoryId = "test";
        trajectoryPool.put(trajectoryId, TrajectoryModel.builder().trajectoryId(trajectoryId).build());
        assertEquals(trajectoryPool.size(), 1);

        mvc.perform(delete("/api/v1/trajectories/" + trajectoryId))
                .andExpect(status().isNoContent());
        verify(repository, times(1)).deleteById(trajectoryId);
        assertEquals(trajectoryPool.size(), 0);

        mvc.perform(delete("/api/v1/trajectories/" + trajectoryId))
                .andExpect(status().isNoContent());
        verify(repository, times(2)).deleteById(trajectoryId);
        assertEquals(trajectoryPool.size(), 0);
    }

    @Test
    @DisplayName("TC-RT-003")
    void givenTrajectory_whenEditExistsTrajectoryAndGet_thenReturnUpdatedAndStatusOk() throws Exception {
        String trajectoryId = "test";
        trajectoryPool.put(
                trajectoryId,
                TrajectoryModel.builder()
                        .trajectoryId("test")
                        .vesselId("vesselId")
                        .from("source")
                        .to("destination")
                        .coordinates(List.of(
                                new CoordinateModel(
                                        43.091,
                                        131.869,
                                        Timestamp.from(Instant.now()).toString(),
                                        18.7,
                                        30.5
                                ),
                                new CoordinateModel(
                                        43.0905,
                                        131.861,
                                        Timestamp.from(Instant.now()).toString(),
                                        18.7,
                                        30.5
                                )
                        ))
                        .build()
        );

        // Получаем траекторию из API
        MvcResult trajectory = mvc.perform(get("/api/v1/trajectories/" + trajectoryId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        // Изменяем траекторию и сохраняем
        String editedTrajectoryJson = trajectory.getResponse().getContentAsString().replaceAll(
                "(43\\.091)|(131.869)", "44.0"
        );
        mvc.perform(put("/api/v1/trajectories/" + trajectoryId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(editedTrajectoryJson)
                )
                .andExpect(status().isOk()); // проверяем статус Ok

        // Получаем измененную траекторию
        String actual = mvc.perform(get("/api/v1/trajectories/" + trajectoryId)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andReturn().getResponse().getContentAsString();

        assertEquals(editedTrajectoryJson, actual);
    }

    @Test
    @DisplayName("TC-RT-004")
    void givenEmptyMap_whenUpdateNotExistsTrajectory_thenCreateAndStatusCreated() throws Exception {
        String trajectoryId = "test";
        String trajectory = """
                {
                "vesselId": "asdasd",
                "from": "source",
                "to": "destination",
                "coordinates":[
                {"lat": 43.0905, "lon": 131.869, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0907, "lon": 131.869, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0908, "lon": 131.87, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0918, "lon": 131.871, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0928, "lon": 131.872, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.093, "lon": 131.872, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5},
                {"lat": 43.0925, "lon": 131.872, "timestamp": "May 18 2023 10:15:32", "speed": 18.7, "heading": 30.5}
                ]
                }""";
        mvc.perform(put("/api/v1/trajectories/" + trajectoryId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(trajectory)
                )
                .andExpect(status().isCreated()); // проверяем статус Ok
    }
}
