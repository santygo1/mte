import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

const ToolButton = ({overlayText, children, ...props}) => {

    const renderTooltip = (tooltipProps) => (
        <Tooltip id="tool-button-tooltip" {...tooltipProps}>
            {overlayText}
        </Tooltip>
    );


    return (
        <OverlayTrigger
            placement="bottom"
            //TODO: to prod
            //trigger="hover"
            delay={{show: 500, hide: 200}}
            overlay={renderTooltip}
        >
            <Button {...props}>
                {children}
            </Button>
        </OverlayTrigger>
    )
}

export default ToolButton;