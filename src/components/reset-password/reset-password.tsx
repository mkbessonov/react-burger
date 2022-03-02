import styles from "./reset-password.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {resetPassword} from "../../service/auth-service";
import {useHistory} from "react-router";


export const ResetPassword = () => {
    const history = useHistory();
    const [pass, setPass] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    };
    const onChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToken(e.target.value);
    };
    const onClick = () => {
        resetPassword(pass, token).then((data) => {
            data.data.success && history.replace({pathname: '/login'});
        }).catch((e) => {
            alert('Произошла ошибка ' + e.message);
        });
    };
    return <main className={styles.content}>
        <div className={styles.container}>
            <p className={"text text_type_main-medium " + styles.text}>Восстановление пароля</p>
            <div className={styles.row}><Input
                type={'text'}
                placeholder={'Введите новый пароль'}
                error={false}
                icon={'ShowIcon'}
                onChange={onChangePass} value={pass}/></div>
            <div className={styles.row}><Input
                type={'text'}
                placeholder={'Введите код из письма'}
                error={false}
                onChange={onChangeToken} value={token}/></div>
            <div className={styles.center}>
                <Button type="primary" size="large" onClick={onClick}>
                    Сохранить
                </Button>
            </div>
            <div>
                <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Вспомнили
                    пароль? <Link to='/login'>Войти</Link></p>
            </div>
        </div>
    </main>;
}