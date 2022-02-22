import styles from "./register.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {register} from "../../service/auth-service";
import {useHistory} from "react-router";

export const Register = () => {
    const history = useHistory();
    const [pass, setPass] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    };
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const onClick = () => {
        register(email, pass, name).then((data)=>{
            data.data.success && history.replace({ pathname: '/login' });
        })
    };

    return <main className={styles.content}>
        <div className={styles.container}>
            <p className={"text text_type_main-medium " + styles.text}>Регистрация</p>
            <div className={styles.row}><Input
                type={'text'}
                placeholder={'Имя'}
                error={false}
                onChange={onChangeName} value={name}/></div>
            <div className={styles.row}><EmailInput onChange={onChangeEmail} value={email} name={'E-mail'}/></div>
            <div className={styles.row}><PasswordInput onChange={onChangePass} value={pass} name={'Пароль'}/></div>
            <div className={styles.center}>
                <Button type="primary" size="large" onClick={onClick}>
                    Зарегистрироваться
                </Button>
            </div>
            <div>
                <p className={"text text_type_main-default text_color_inactive " + styles.text_bottom}>Уже зарегистрированы? <Link to={'/login'}>Войти</Link></p>
            </div>
        </div>
    </main>;
}