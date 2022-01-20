import React from "react";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "../link/link";
import styles from './app-header.module.css'

export const AppHeader = () => {
    return (
        <header>
            <nav>
                <div className={styles.app_header}>
                    <Link icon={<BurgerIcon type="secondary"/>} text={'Конструктор'}/>
                    <Link icon={<ListIcon type="secondary"/>} text={'Лента заказов'}/>
                    <div className={styles.logo}><Logo/></div>
                    <Link icon={<ProfileIcon type="secondary"/>} text={'Личный кабинет'}/>
                </div>
            </nav>
        </header>
    );
};