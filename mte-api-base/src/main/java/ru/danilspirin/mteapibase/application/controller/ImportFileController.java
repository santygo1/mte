package ru.danilspirin.mteapibase.application.controller;


import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.danilspirin.mteapibase.application.exception.ExportError;
import ru.danilspirin.mteapibase.application.service.fileExport.ExportServiceFactory;


@RestController
@RequestMapping("/resources/download")
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ImportFileController {
    ExportServiceFactory exportServiceFactory;

    @PostMapping()
    public ResponseEntity<InputStreamResource> download(@RequestParam String fileFormat){

        InputStreamResource download;
        try {
            download = exportServiceFactory.getService(fileFormat.toLowerCase()).getFile();
        }catch (Exception e){
            throw new ExportError();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=trajectories." + fileFormat.toLowerCase());
        headers.setContentType(MediaType.TEXT_PLAIN); // Для скачивания произвольных файлов

        return ResponseEntity.ok()
                .headers(headers)
                .body(download);
    }
}
