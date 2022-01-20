import {Modal} from "../modal/modal";
import styles from './order-details.module.css'

interface IOrderDetailsProps {
    handleClose: () => void
}

export const OrderDetails = (props: IOrderDetailsProps) => {
    const {handleClose} = props;
    return (
        <Modal width={720} handleClose={() => {
            handleClose();
        }}>
            <div className={styles.order_details_content}>
                <div className={"text text_type_digits-large " + styles.number_order}>03456</div>
                <div className={"text text_type_main-medium " + styles.order_details_id}>индентификатор заказа</div>
                <img src={require('../../images/done.png')} alt={'Готово'}/>
                <div className={"text text_type_main-default " + styles.order_details_text}>
                    <div>Ваш заказ начали готовить</div>
                    <div>Дождитесь готовности на орбитальной станции</div>
                </div>
            </div>
        </Modal>
    );
};