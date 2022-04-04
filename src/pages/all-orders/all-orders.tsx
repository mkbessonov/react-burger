import React, {useEffect} from "react";
import {TWSState} from "../../store/reducers/ws-reducer";
import {socketCloseForAll, socketStartForAll} from "../../store/actions/soket-actions";
import {OrderItemList} from "../../components/order-item-list/order-item-list";
import styles from './all-orders.module.css'
import {OrderInfo} from "../../components/order-info/order-info";
import {useDispatch, useSelector} from "../../store/hooks";

export const AllOrders = () => {
    const {feeds}: TWSState = useSelector((state) => state.wsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(socketStartForAll());
        return () => {
            dispatch(socketCloseForAll());
        };
    }, [dispatch]);
    return (
        <main className={styles.main}>
            <div className={styles.left_container}>
                <div className={'text text_type_main-large mt-10'}>Лента заказов</div>
                <div className={styles.list}>
                    {feeds.orders.map((item) => (<OrderItemList key={item._id} order={item}/>))}
                </div>
            </div>
            <div className={styles.right_container}>
                <OrderInfo/>
            </div>
        </main>
    );
};


