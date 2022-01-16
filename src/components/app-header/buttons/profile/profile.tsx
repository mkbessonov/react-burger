import {Button, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

export const Profile = () => {
    return <Button type="secondary" size="small"><ProfileIcon type="secondary" /><span className='text_type_main-default text_color_inactive'>Личный кабинет</span></Button>;
};