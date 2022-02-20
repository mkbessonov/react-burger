import styles from "./register.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

export const Register = () => {
    return <main className={styles.content}>
        <div className={styles.container}>
            <p className={"text text_type_main-medium " + styles.text}>Регистрация</p>
            <div className={styles.row}><Input
                type={'text'}
                placeholder={'Имя'}
                error={false}
                onChange={() => {
                }} value={''}/></div>
            <div className={styles.row}><EmailInput onChange={() => {
            }} value={''} name={'E-mail'}/></div>
            <div className={styles.row}><PasswordInput onChange={() => {
            }} value={''} name={'Пароль'}/></div>
            <div className={styles.center}>
                <Button type="primary" size="large">
                    Зарегистрироваться
                </Button>
            </div>
            <div>
                <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Уже зарегистрированы? <a href={'/login'}>Войти</a></p>
            </div>
        </div>
    </main>;
}