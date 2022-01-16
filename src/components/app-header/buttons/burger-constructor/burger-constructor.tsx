import {BurgerIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

export const BurgerConstructorButton = () => {
    return <Button type="secondary" size="small" ><BurgerIcon type="secondary"/><span className='text_type_main-default text_color_inactive'>Конструктор</span></Button>;
};