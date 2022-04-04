import styles from "./profile.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {setUser, signOutAction} from "../../store/actions/user";
import {updateUser} from "../../service/user";
import {UserOrder} from "../user-order/user-order";
import {useDispatch, useSelector} from "../../store/hooks";

enum CONTENT {
    PROFILE = 'PROFILE',
    ORDER = 'ORDER'
}

export const Profile = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const [currentContent, setCurrentContent] = useState<CONTENT>(location.pathname === '/profile' ? CONTENT.PROFILE : CONTENT.ORDER);
    const user = useSelector((state) => state.user);
    const [form, setValue] = useState({email: user.user?.email || '', name: user.user?.name || '', pass: ''});
    const [oldForm, setOldValue] = useState({email: user.user?.email || '', name: user.user?.name || '', pass: ''});
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };
    const save = () => {
        updateUser(form.email, form.pass, form.name).then((res) => {
            if (res && res.data.success) {
                const newUser = res.data.user;
                dispatch(setUser(newUser));
                setOldValue({email: form.email, name: form.name, pass: form.pass})
            }
        });
    };
    const revert = () => {
        setValue({email: oldForm.email || '', name: oldForm.name || '', pass: oldForm.pass});
    };
    const isEqual = () => {
        return form.email === oldForm.email && form.name === oldForm.name && form.pass === oldForm.pass;
    };
    return (
        <main className={styles.content}>
            <div className={styles.container}>
                <div className={styles.left_panel}>
                    <NavLink to={'/profile'} exact={true} onClick={() => setCurrentContent(CONTENT.PROFILE)}
                             className={"text text_type_main-medium text_color_inactive " + styles.left_panel_button}
                             activeClassName={styles.active_button}>Профиль</NavLink>
                    <NavLink to={'/profile/orders'} onClick={() => setCurrentContent(CONTENT.ORDER)}
                             className={"text text_type_main-medium text_color_inactive " + styles.left_panel_button}
                             activeClassName={styles.active_button}>История заказов</NavLink>
                    <div
                        onClick={() => {
                            dispatch(signOutAction())
                        }}
                        className={"text text_type_main-medium text_color_inactive " + styles.left_panel_button}>Выход
                    </div>
                </div>
                <div className={styles.right_panel}>
                    {currentContent === CONTENT.PROFILE && <>
                        <div>
                            <div className={styles.row}><Input
                                type={'text'}
                                name={'name'}
                                placeholder={'Имя'}
                                error={false}
                                onChange={onChange} value={form.name}/></div>
                            <div className={styles.row}><EmailInput onChange={onChange} value={form.email}
                                                                    name={'email'}/>
                            </div>
                            <div className={styles.row}><PasswordInput onChange={onChange} value={form.pass}
                                                                       name={'pass'}/>
                            </div>
                            {!isEqual() && <div className={styles.buttons}>
                                <Button type="secondary" size="large" onClick={revert}>
                                    Отмена
                                </Button>
                                <Button type="primary" size="large" onClick={save}>
                                    Сохранить
                                </Button>
                            </div>}
                        </div>
                    </>}
                    {currentContent === CONTENT.ORDER && <UserOrder/>}
                </div>
            </div>
        </main>
    );
}