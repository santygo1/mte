package ru.danilspirin.mteapibase.events;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class ApplicationEventListener {

    @EventListener(ApplicationReadyEvent.class)
    public void handleReady() {
        log.info("Application successfully started");
    }

}
