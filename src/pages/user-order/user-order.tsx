import React, {useEffect} from "react";
import {TWSState} from "../../store/reducers/ws-reducer";
import {WS_USER_URL} from "../../service/api";
import {ETypesAction} from "../../store/actions/types";
import {getCookie} from "../../utils";
import {OrderItemList} from "../../components/order-item-list/order-item-list";
import styles from './user-order.module.css'
import {useDispatch, useSelector} from "../../store/hooks";

export const UserOrder = () => {
    const { userFeeds }: TWSState = useSelector((state) => state.wsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: ETypesAction.WS_CONNECTION_START, wsUrl: WS_USER_URL, token: getCookie('token') });
        return () => {
            dispatch({ type: ETypesAction.WS_CONNECTION_CLOSED });
        };
    }, [dispatch]);
    return (
        <main className={styles.main}>
            {userFeeds.orders.map((item) => (<OrderItemList key={item._id} order={item}/>))}
        </main>
    );
};

