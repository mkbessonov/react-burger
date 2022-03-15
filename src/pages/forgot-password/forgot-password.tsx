import styles from "./forgot-password.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback, useState} from "react";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {forgotPassword} from "../../service/auth-service";

export const ForgotPassword = () => {
    const history = useHistory();
    const [email, setEmail] = useState<string>('');
    const onClick = useCallback(
        (e) => {
            e.preventDefault();
            forgotPassword(email).then((data) => {
                const result = data.data;
                result.success && localStorage.setItem('forgotSuccessful', 'true');
                result.success && history.replace({pathname: '/reset-password'});
            }).catch(() => {
                alert('Произошла ошибка');
            });
        },
        [history, email]
    );
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    return (
        <main className={styles.content}>
            <form className={styles.container} onSubmit={onClick}>
                <p className={"text text_type_main-medium " + styles.text}>Восстановление пароля</p>
                <div className={styles.row}><EmailInput onChange={onChange} value={email} name={'Укажите e-mail'}/>
                </div>
                <div className={styles.center}>
                    <Button type="primary" size="large" htmlType='submit'>
                        Восстановить
                    </Button>
                </div>
                <div>
                    <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Вспомнили
                        пароль? <Link to={'/login'}>Войти</Link></p>
                </div>
            </form>
        </main>
    );
}