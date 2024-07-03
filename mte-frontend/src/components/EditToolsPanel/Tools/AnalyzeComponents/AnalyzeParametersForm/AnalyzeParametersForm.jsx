import React, {useContext, useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import AnalyzeTrajectoryContext from "../../../../../contexts/AnalyzeTrajectoryContext/AnalyzeTrajectoryContext.js";
import classes from "./../../../../Confirmation/Confirmation.module.css";

const MAX_RADIUS_VALUE = 10;

const AnalyzeParametersForm = ({state, setState}) => {
    const {params, setParams, doAnalyze} = useContext(AnalyzeTrajectoryContext);

    function onChangeRadius(value) {
        setParams({...params, radius: (MAX_RADIUS_VALUE * value) / 100});
    }

    function setInterpolation(value) {
        setParams({...params, interpolation: value});
    }

    function setDateFrom(value) {
        setParams({...params, dateFrom: value});
    }

    function setDateTo(value) {
        setParams({...params, dateTo: value});
    }

    function analyze() {
        setState(false);
        doAnalyze();
    }

    return (
        <Modal show={state} onHide={() => setState(false)}
               aria-labelledby="contained-modal-title-vcenter"
               centered
               className={classes.Confirmation}
               backdropClassName={classes.ConfirmationBackdrop}
               size={"lg"}
        >
            <Modal.Header closeButton>
                <Modal.Title>Настройка анализа</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Радиус опасной близости судов</Form.Label>
                <Row>
                    <Col>
                        <Form.Range value={(params.radius * 100) / MAX_RADIUS_VALUE}
                                    onChange={(e) => onChangeRadius(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label style={{fontWeight: 500}}>{params.radius.toFixed(1)} км.</Form.Label>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Form.Label>Дата от</Form.Label>
                        <Form.Control type="datetime-local" value={params.dateFrom}
                                      onChange={(e) => setDateFrom(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label>Дата до</Form.Label>
                        <Form.Control type="datetime-local" value={params.dateTo}
                                      onChange={(e) => setDateTo(e.target.value)}/>
                    </Col>
                </Row>
                <br/>
                <Form.Check // prettier-ignore
                    type={"checkbox"}
                    id={`default-checkbox`}
                    label={`Интерполяция результата`}
                    checked={params.interpolation}
                    onChange={(e) => setInterpolation(e.target.checked)}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"secondary"} onClick={() => setState(false)}>Отмена</Button>
                <Button onClick={analyze}>Анализировать</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AnalyzeParametersForm;