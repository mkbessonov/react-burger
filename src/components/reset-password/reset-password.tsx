import styles from "./reset-password.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {resetPassword} from "../../service/auth-service";
import {useHistory} from "react-router";


export const ResetPassword = () => {
    const history = useHistory();
    const [form, setValue] = useState({pass: '', token: ''});
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };
    const onClick = () => {
        resetPassword(form.pass, form.token).then((data) => {
            data.data.success && history.replace({pathname: '/login'});
        }).catch(() => {
            alert('Произошла ошибка');
        });
    };
    return (
        <main className={styles.content}>
            <form className={styles.container} onSubmit={onClick}>
                <p className={"text text_type_main-medium " + styles.text}>Восстановление пароля</p>
                <div className={styles.row}><Input
                    type={'text'}
                    placeholder={'Введите новый пароль'}
                    error={false}
                    icon={'ShowIcon'}
                    name={'pass'}
                    onChange={onChange} value={form.pass}/></div>
                <div className={styles.row}><Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    error={false}
                    name={'token'}
                    onChange={onChange} value={form.token}/></div>
                <div className={styles.center}>
                    <Button type="primary" size="large" htmlType='submit'>
                        Сохранить
                    </Button>
                </div>
                <div>
                    <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Вспомнили
                        пароль? <Link to='/login'>Войти</Link></p>
                </div>
            </form>
        </main>
    );
}