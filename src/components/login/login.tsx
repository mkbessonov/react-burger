import styles from "./login.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

export const Login = () => {
    return <main className={styles.content}>
        <div className={styles.container}>
            <p className={"text text_type_main-medium " + styles.text}>Вход</p>
            <div className={styles.row}><EmailInput onChange={() => {
            }} value={''} name={'E-mail'}/></div>
            <div className={styles.row}><PasswordInput onChange={() => {
            }} value={''} name={'Пароль'}/></div>
            <div className={styles.center}>
                <Button type="primary" size="large">
                    Войти
                </Button>
            </div>
            <div>
                <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Вы новый пользователь? <a href={'/register'}>Зарегистрироваться</a></p>
                <p className={"text text_type_main-default text_color_inactive " + styles.text}>Забыли пароль? <a href={'/forgot-password'}>Восстановить пароль</a></p>
            </div>
        </div>
    </main>;
}