import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from "./CircleButton.module.css";

const CircleButton = ({faIcon, children, ...props}) => {
    return (
        <Button className={classes.CircleButton} {...props}>
            <div className={classes.CircleButtonIconWrapper}>
                <FontAwesomeIcon className={classes.CircleButtonIcon} icon={faIcon}/></div>
            <span className={classes.CircleButtonText}>{children}</span>
        </Button>
    )
}

export default CircleButton;