import React, {useEffect} from "react";
import {TWSState} from "../../store/reducers/ws-reducer";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {WS_USER_URL} from "../../service/api";
import {ETypesAction, IOrderInfo} from "../../store/actions/types";
import {getCookie} from "../../utils";
import {OrderItemList} from "../../components/order-item-list/order-item-list";
import styles from './user-order.module.css'

export const UserOrder = () => {
    const { userFeeds }: TWSState = useSelector((state: IRootState) => state.wsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: ETypesAction.WS_CONNECTION_START, wsUrl: WS_USER_URL, token: getCookie('token') });
        return () => {
            dispatch({ type: ETypesAction.WS_CONNECTION_CLOSED });
        };
    }, [dispatch]);
    return (
        <main className={styles.main}>
            {userFeeds.orders.map((item: IOrderInfo) => (<OrderItemList key={item._id} order={item}/>))}
        </main>
    );
};

