import React, {useEffect} from 'react';
import {Button, Col, Form, Modal, Row, Spinner} from "react-bootstrap";
import classes from "./../../../Confirmation/Confirmation.module.css";
import local from "./ExportFileModal.module.css"
import useFetch from "../../../../hooks/useFetch.js";
import ExportService from "/src/api/service/ExportService.js";
import {EXPORT_FILE_TYPES} from "/src/api/service/ExportService.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileCsv, faFileExcel} from "@fortawesome/free-solid-svg-icons";
import fileDownload from "js-file-download";

const ExportFileModal = ({show, setShow}) => {

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size={"lg"}
            className={classes.Confirmation}
            backdropClassName={classes.ConfirmationBackdrop}
        >
            <Modal.Header closeButton>
                <Modal.Title>Экспорт</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Form.Label>Выберите формат для экспорта</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ExportButton filetype={EXPORT_FILE_TYPES.csv} icon={faFileCsv}/>
                    </Col>
                    <Col>
                        <ExportButton filetype={EXPORT_FILE_TYPES.excel} icon={faFileExcel}/>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

const ExportButton = ({filetype, icon}) => {

    const [exportFile, isLoading, error] = useFetch(
        async () => {
            await ExportService.exportFile(filetype);
        }
    );

    function onClickDownload() {
        exportFile();
    }

    return (
        <Button className={local.ExportButton} onClick={onClickDownload} disabled={isLoading}
                variant={"outline-light"}>
            {
                isLoading ?
                    <Spinner animation="border" role="status" variant={"primary"}/> :
                    <div>
                        <FontAwesomeIcon icon={icon} color={"red"} size={"2xl"}/>
                        <div>
                            <strong>.{filetype}</strong>
                        </div>
                    </div>
            }
        </Button>
    );
};

export default ExportFileModal;