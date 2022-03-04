import styles from "./login.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import {useAuth} from "../../service/auth";

export const Login = () => {
    const history = useHistory();
    const {getAndSetUser, ...auth} = useAuth();
    const [form, setValue] = useState({email: '', pass: ''});
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const handleLogin = useCallback(
        e => {
            e.preventDefault();
            auth.signIn(() => {
                history.replace({pathname: '/ingredients'});
            }, form.email, form.pass);
        },
        [auth, history, form]
    );

    return (
        <main className={styles.content}>
            <form className={styles.container} onSubmit={handleLogin}>
                <p className={"text text_type_main-medium " + styles.text}>Вход</p>
                <div className={styles.row}><EmailInput onChange={onChange} value={form.email} name={'email'}/></div>
                <div className={styles.row}><PasswordInput onChange={onChange} value={form.pass} name={'pass'}/></div>
                <div className={styles.center}>
                    <Button type="primary" htmlType='submit' size="large">
                        Войти
                    </Button>
                </div>
                <div>
                    <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Вы новый
                        пользователь? <a href={'/register'}>Зарегистрироваться</a></p>
                    <p className={"text text_type_main-default text_color_inactive " + styles.text}>Забыли пароль? <Link
                        to={'/forgot-password'}>Восстановить пароль</Link></p>
                </div>
            </form>
        </main>
    );
};