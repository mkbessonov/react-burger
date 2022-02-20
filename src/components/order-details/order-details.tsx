import styles from './order-details.module.css'
import React from "react";
import {useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {Order} from "../../store/actions/types";

export const OrderDetails = () => {
    const {orderDetails, request, failed}: Order = useSelector((state: IRootState) => state.orderDetails);
    if (failed) {
        return <p>Произошла ошибка при получении данных</p>
    } else if (request) {
        return <p>Идет отправка заказа...</p>
    }
    return (
        orderDetails ? <div className={styles.order_details_content}>
            <div className={"text text_type_digits-large " + styles.number_order}>{orderDetails.order.number}</div>
            <div className={"text text_type_main-medium " + styles.order_details_id}>индентификатор заказа</div>
            <img src={require('../../images/done.png')} alt={'Готово'}/>
            <div className={"text text_type_main-default " + styles.order_details_text}>
                <div>Ваш заказ начали готовить</div>
                <div>Дождитесь готовности на орбитальной станции</div>
            </div>
        </div> : null
    );
};