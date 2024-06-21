import {Button, Modal} from "react-bootstrap";
import classes from "./Confirmation.module.css";

export const ConfirmationActions = {
    CANCEL: 1,
    CONFIRM: 2
}

const Confirmation = ({title, text, onClickCancel, onClickConfirm, children}) => {
    return (
        <Modal
            show={true}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={classes.Confirmation}
            backdropClassName={classes.ConfirmationBackdrop}
        >
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={classes.Text}>{text}</div>
                <div className={classes.AdditionalComponentsWrapper}>
                    {children}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClickCancel}>
                    Отменить
                </Button>
                <Button variant="primary" onClick={onClickConfirm}>
                    Ок
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default Confirmation;