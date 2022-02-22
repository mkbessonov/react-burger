import styles from "./login.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {login} from "../../service/auth-service";
import {useHistory} from "react-router";

export const Login = () => {
    const history = useHistory();
    const [pass, setPass] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    };

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onClick = () => {
        login(email, pass).then((data)=>{
            data.data.success && history.replace({ pathname: '/' });
        })
    };
    return <main className={styles.content}>
        <div className={styles.container}>
            <p className={"text text_type_main-medium " + styles.text}>Вход</p>
            <div className={styles.row}><EmailInput onChange={onChangeEmail} value={email} name={'E-mail'}/></div>
            <div className={styles.row}><PasswordInput onChange={onChangePass} value={pass} name={'Пароль'}/></div>
            <div className={styles.center}>
                <Button type="primary" size="large" onClick={onClick}>
                    Войти
                </Button>
            </div>
            <div>
                <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Вы новый пользователь? <a href={'/register'}>Зарегистрироваться</a></p>
                <p className={"text text_type_main-default text_color_inactive " + styles.text}>Забыли пароль? <Link to={'/forgot-password'}>Восстановить пароль</Link></p>
            </div>
        </div>
    </main>;
}