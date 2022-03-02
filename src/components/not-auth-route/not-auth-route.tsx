import {useAuth} from "../../service/auth";
import React, {ReactNode, useEffect, useState} from "react";
import {Redirect, useLocation} from "react-router-dom";
import {RouteProps, useHistory} from "react-router";

interface INotAuthRoteProps extends RouteProps {
    children: ReactNode
    path: string
}

export const NotAuthRote = (props: INotAuthRoteProps) => {
    let {getAndSetUser, ...auth} = useAuth();
    const [isUserLoaded, setUserLoaded] = useState(false);
    const history = useHistory();

    const init = async () => {
        await getAndSetUser();
        setUserLoaded(true);
    };
    const location = useLocation()

    useEffect(() => {
        const currentPath = localStorage.getItem('currentPath');
        if (location.pathname === '/reset-password' && localStorage.getItem('forgotSuccessful') !== 'true' && (currentPath === '/forgot-password' || currentPath === '/reset-password')){
            history.replace({pathname: '/forgot-password'});
        }
        if (currentPath === '/reset-password' && currentPath !== location.pathname){
            localStorage.setItem('forgotSuccessful', 'false');
        }
        localStorage.setItem('currentPath', location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        init();
    }, []);

    if (!isUserLoaded) {
        return null;
    }
    if (auth.user.user) {
        return (
            <Redirect
                to={'/ingredients'}
            />
        );
    }

    return <>{props.children}</>;
}