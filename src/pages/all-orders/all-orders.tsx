import React, {useEffect} from "react";
import {TWSState} from "../../store/reducers/ws-reducer";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {socketClose, socketStart} from "../../store/actions/soket-actions";
import {IOrderInfo} from "../../store/actions/types";
import {OrderItemList} from "../../components/order-item-list/order-item-list";
import styles from './all-orders.module.css'
import {OrderInfo} from "../../components/order-info/order-info";

export const AllOrders = () => {
    const {feeds}: TWSState = useSelector((state: IRootState) => state.wsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(socketStart());
        return () => {
            dispatch(socketClose());
        };
    }, [dispatch]);
    return (
        <main className={styles.main}>
            <div className={styles.left_container}>
                <div className={'text text_type_main-large mt-10'}>Лента заказов</div>
                <div className={styles.list}>
                    {feeds.orders.map((item: IOrderInfo) => (<OrderItemList key={item._id} order={item}/>))}
                </div>
            </div>
            <div className={styles.right_container}>
                <OrderInfo/>
            </div>
        </main>
    );
};


