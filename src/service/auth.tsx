import React, {createContext, ReactNode, useContext} from "react";
import {setUser, signInAction} from "../store/actions/user";
import {getUser} from "./user";
import {useDispatch, useSelector} from "../store/hooks";

const AuthContext = createContext<any>(undefined);

interface IProvideAuthProps {
    children: ReactNode
}

export function ProvideAuth(props: IProvideAuthProps) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>;
}

export function useProvideAuth() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const getAndSetUser = () => {
        return getUser().then((res) => {
            if (res && res.data.success) {
                const user = res.data.user;
                dispatch(setUser(user));
            }
        })
    };
    const signIn = (cb: () => void, email: string, pass: string) => {
        return dispatch(signInAction(email, pass, cb));
    };

    return {
        user,
        signIn,
        getAndSetUser
    };
}

export function useAuth() {
    return useContext(AuthContext);
}
