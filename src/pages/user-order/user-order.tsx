import React, {useEffect} from "react";
import {TWSState} from "../../store/reducers/ws-reducer";
import {OrderItemList} from "../../components/order-item-list/order-item-list";
import styles from './user-order.module.css'
import {useDispatch, useSelector} from "../../store/hooks";
import {socketCloseForUser, socketStartForUser} from "../../store/actions/soket-actions";

export const UserOrder = () => {
    const { userFeeds }: TWSState = useSelector((state) => state.wsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(socketStartForUser());
        return () => {
            dispatch(socketCloseForUser());
        };
    }, [dispatch]);
    return (
        <main className={styles.main}>
            {userFeeds.orders.map((item) => (<OrderItemList key={item._id} order={item}/>))}
        </main>
    );
};

