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
}