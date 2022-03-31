import styles from './order-details.module.css'
import React from "react";
import {Order} from "../../store/actions/types";
import {useSelector} from "../../store/hooks";
import {Loader} from "../loader/loader";
import {Modal} from "../modal/modal";
import {Alert} from "../alert/alert";

interface IOrderDetailsProps {
    handleClose: () => void;
}

export const OrderDetails = (props: IOrderDetailsProps) => {
    const {orderDetails, request, failed}: Order = useSelector((state) => state.orderDetails);
    if (failed) {
        return <Alert handleClose={props.handleClose} color={'red'} message={'Произошла ошибка при получении данных'}/>
    } else if (request) {
        return <Loader/>
    }
    return (
        orderDetails ? <Modal width={720} handleClose={props.handleClose}>
            <div className={styles.order_details_content}>
                <div className={"text text_type_digits-large " + styles.number_order}>{orderDetails.order.number}</div>
                <div className={"text text_type_main-medium " + styles.order_details_id}>индентификатор заказа</div>
                <img src={require('../../images/done.png')} alt={'Готово'}/>
                <div className={"text text_type_main-default " + styles.order_details_text}>
                    <div>Ваш заказ начали готовить</div>
                    <div>Дождитесь готовности на орбитальной станции</div>
                </div>
            </div>
        </Modal> : null
    );
};