import styles from "./register.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FormEvent, useState} from "react";
import {Link} from "react-router-dom";
import {register} from "../../service/auth-service";
import {useHistory} from "react-router";

export const Register = () => {
    const history = useHistory();
    const [form, setValue] = useState({email: '', pass: '', name: ''});
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };
    const onClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(form.email, form.pass, form.name).then((data) => {
            data.data.success && history.replace({pathname: '/login'});
        }).catch(() => {
            alert('Произошла ошибка');
        });
    };

    return (
        <main className={styles.content}>
            <form className={styles.container} onSubmit={onClick}>
                <p className={"text text_type_main-medium " + styles.text}>Регистрация</p>
                <div className={styles.row}><Input
                    type={'text'}
                    name={'name'}
                    placeholder={'Имя'}
                    error={false}
                    onChange={onChange} value={form.name}/></div>
                <div className={styles.row}><EmailInput onChange={onChange} name={'email'} value={form.email}/></div>
                <div className={styles.row}><PasswordInput onChange={onChange} name={'pass'} value={form.pass}/></div>
                <div className={styles.center}>
                    <Button type="primary" size="large" htmlType='submit'>
                        Зарегистрироваться
                    </Button>
                </div>
                <div>
                    <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Уже
                        зарегистрированы? <Link to={'/login'}>Войти</Link></p>
                </div>
            </form>
        </main>
    );
}