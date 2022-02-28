import styles from "./login.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {useHistory} from "react-router";
import {useAuth} from "../../service/auth";

export const Login = () => {
    const history = useHistory();
    let auth = useAuth();
    const [pass, setPass] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    };

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    let handleLogin = useCallback(
        e => {
            e.preventDefault();
            auth.signIn(() => {
                history.replace({pathname: '/'});
            }, email, pass);
        },
        [auth, history, email, pass]
    );
    console.log(auth.user.user, 89);
    if (auth.user.user) {
        return (
            <Redirect
                to={{
                    pathname: '/'
                }}
            />
        );
    }
    return <main className={styles.content}>
        <div className={styles.container}>
            <p className={"text text_type_main-medium " + styles.text}>Вход</p>
            <div className={styles.row}><EmailInput onChange={onChangeEmail} value={email} name={'E-mail'}/></div>
            <div className={styles.row}><PasswordInput onChange={onChangePass} value={pass} name={'Пароль'}/></div>
            <div className={styles.center}>
                <Button type="primary" size="large" onClick={handleLogin}>
                    Войти
                </Button>
            </div>
            <div>
                <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Вы новый
                    пользователь? <a href={'/register'}>Зарегистрироваться</a></p>
                <p className={"text text_type_main-default text_color_inactive " + styles.text}>Забыли пароль? <Link
                    to={'/forgot-password'}>Восстановить пароль</Link></p>
            </div>
        </div>
    </main>;
}