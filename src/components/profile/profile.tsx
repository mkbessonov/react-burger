import styles from "./profile.module.css";
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {signOutAction} from "../../store/actions/user";
import {useDispatch} from "react-redux";

enum CONTENT {
    PROFILE = 'PROFILE',
    ORDER = 'ORDER'
}

export const Profile = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const [currentContent, setCurrentContent] = useState<CONTENT>(location.pathname === '/profile' ? CONTENT.PROFILE : CONTENT.ORDER);

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
    return <main className={styles.content}>
        <div className={styles.container}>
            <div className={styles.left_panel}>
                <NavLink to={'/profile'} exact={true} onClick={() => setCurrentContent(CONTENT.PROFILE)}
                         className={"text text_type_main-medium text_color_inactive " + styles.left_panel_button}
                         activeClassName={styles.active_button}>Профиль</NavLink>
                <NavLink to={'/profile/orders'} onClick={() => setCurrentContent(CONTENT.ORDER)}
                         className={"text text_type_main-medium text_color_inactive " + styles.left_panel_button}
                         activeClassName={styles.active_button}>История заказов</NavLink>
                <NavLink to={'/login'}
                         onClick={()=>{dispatch(signOutAction())}}
                         className={"text text_type_main-medium text_color_inactive " + styles.left_panel_button}
                         activeClassName={styles.active_button}>Выход</NavLink>
            </div>
            <div className={styles.right_panel}>
                {currentContent === CONTENT.PROFILE && <>
                    <div className={styles.row}><Input
                        type={'text'}
                        placeholder={'Имя'}
                        error={false}
                        onChange={onChangeName} value={name}/></div>
                    <div className={styles.row}><EmailInput onChange={onChangeEmail} value={email} name={'E-mail'}/>
                    </div>
                    <div className={styles.row}><PasswordInput onChange={onChangePass} value={pass} name={'Пароль'}/>
                    </div>
                </>}
            </div>
        </div>
    </main>;
}