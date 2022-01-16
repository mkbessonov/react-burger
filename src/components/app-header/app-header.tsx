import React from "react";
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerConstructorButton} from "./buttons/burger-constructor/burger-constructor";
import {Profile} from "./buttons/profile/profile";
import {Orders} from "./buttons/orders/orders";
import './app-header.css'

export const AppHeader = () => {
    return (
        <header>
            <nav>
                <div className='header-button'><BurgerConstructorButton/></div>
                <Logo/>
                <Orders/>
                <Profile/>
            </nav>
        </header>
    );
};