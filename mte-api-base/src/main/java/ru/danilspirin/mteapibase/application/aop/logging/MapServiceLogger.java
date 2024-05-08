package ru.danilspirin.mteapibase.application.aop.logging;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.util.List;


@Aspect
@Component
@Slf4j
public class MapServiceLogger {
    @Around("execution(* ru.danilspirin.mteapibase.application.service.MapServiceImpl.getTrajectoriesInCoordinates(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {

        Object proceed = joinPoint.proceed();

        log.debug("Getting trajectories in lon[{}, {}] lat[{}, {}] count: {}",
                joinPoint.getArgs()[0], // lonFrom
                joinPoint.getArgs()[1], // lonTo
                joinPoint.getArgs()[2], // latFrom
                joinPoint.getArgs()[3], // latTo
                ((List<?>) proceed).size() // trajectories list count
        );

        return proceed;
    }
}
