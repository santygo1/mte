package ru.danilkaspirin.mtegateway.events;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class ApplicationEventListener {
    Logger log = LoggerFactory.getLogger(ApplicationEventListener.class);

    @EventListener(ApplicationReadyEvent.class)
    public void handleReady() {
        log.info("Application successfully started");
    }

}
