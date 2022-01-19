import React from "react";
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerConstructorButton} from "./buttons/burger-constructor/burger-constructor";
import {Profile} from "./buttons/profile/profile";
import {Orders} from "./buttons/orders/orders";
import styles from './app-header.module.css'

export const AppHeader = () => {
    return (
        <header>
            <nav>
                <div className={styles.header_button}><BurgerConstructorButton/></div>
                <Logo/>
                <Orders/>
                <Profile/>
            </nav>
        </header>
    );
};