import {Button, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";


export const Orders = () => {
    return <Button type="secondary" size="small"><ListIcon type="secondary" /><span className='text_type_main-default text_color_inactive'>Лента заказов</span></Button>;
};