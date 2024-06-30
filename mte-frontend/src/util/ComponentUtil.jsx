import {Spinner} from "react-bootstrap";

export default class ComponentUtil {
    static getDefaultTipContent(header, body) {
        return {
            headerContent: <strong className="me-auto">{header}</strong>,
            bodyContent: <span>{body}</span>,
            toastProps: {
                className: "fade-in",
                autohide: true,
                delay: 3000,
            },
        }
    }

    static getProcessingTipContent(header, body, variant = "dark", animation = "border") {
        return {
            headerContent:
                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <strong className="me-auto">{header}</strong>
                    <div><Spinner animation={animation} size={"sm"} variant={variant}/></div>
                </div>,
            bodyContent: <span>{body}</span>,
            toastProps: {
                className: "fade-in",
            },
            toastHeaderProps: {
                closeButton: false
            }
        }
    }
}