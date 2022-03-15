import {useAuth} from "../../service/auth";
import {ReactNode, useEffect, useState} from "react";
import React from "react";
import {Redirect, Route, RouteProps} from "react-router";

interface IProtectedRouteProps extends RouteProps {
    children: ReactNode
}

export const ProtectedRoute = (props: IProtectedRouteProps) => {
    const {getAndSetUser, ...auth} = useAuth();
    const {...rest} = props;
    const [isUserLoaded, setUserLoaded] = useState(false);

    const init = async () => {
        await getAndSetUser();
        setUserLoaded(true);
    };

    useEffect(() => {
        init();
    }, []);

    if (!isUserLoaded) {
        return null;
    }
    rest.children = null;
    return (
        <Route
            {...rest}
            render={({location}) =>
                auth.user.user ? (
                    props.children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};