import React from 'react';
import classes from "./Sidebar.module.css";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const BASE_ITEMS = [
    {
        id: 'home',
        icon: faHome,
        tooltip: 'Домой',
        handler: () => console.log('Привет')
    }
]

const Sidebar = (props) => {
    const items = [...BASE_ITEMS, ...props.items];

    return (
        <div className={classes.Sidebar}>
            {items.map((item, i) => {
                const idPrefix = 'base_menu_item_' + ((typeof item.id === 'undefined') || item.id === null || item.id.length === 0 ? i : item.id);

                const tooltip =
                    (typeof item.tooltip === 'undefined') || item.tooltip.length === 0 ?
                        null :
                        <Tooltip id={idPrefix + '_tooltip'} key={idPrefix + '_tooltip'}>{item.tooltip}</Tooltip>;

                let icon = item.icon;
                if ((typeof icon === 'undefined') || icon == null) {
                    icon = faClose;
                    console.log('Не установлена иконка для пункта меню ' + idPrefix);
                }

                const button =
                    <Button key={idPrefix}
                            className={classes.item}
                            onClick={item.handler}
                    >
                        <FontAwesomeIcon icon={icon}/>
                    </Button>;

                console.log(idPrefix)
                console.log(tooltip)
                console.log(item)
                console.log(button)

                return tooltip === null ?
                    button
                    :
                    <OverlayTrigger key={idPrefix + '_tooltip_trigger'} placement="right" overlay={tooltip}>
                        {button}
                    </OverlayTrigger>
            })}
        </div>
    );
};

export default Sidebar;