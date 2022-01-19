import {Modal} from "../modal/modal";
import styles from './order-details.module.css'
interface IOrderDetailsProps {
    handleClose: () => void
}

export const OrderDetails = (props: IOrderDetailsProps) => {
    const {handleClose} = props;
    return (<Modal handleClose={() => {
        handleClose();
    }}>
        <div className={"text text_type_digits-large "+ styles.number_order}>03456</div>
        <div className="text text_type_main-medium"  style={{textAlign: "center"}}>индентификатор заказа</div>
        <img src={require('../../images/done.png')} style={{display: 'flex', margin: 'auto', width: "100px"}} alt={'Готово'}/>
        <div className="text text_type_main-default"  style={{textAlign: "center"}}>Ваш заказ начали готовить</div>
        <div className="text text_type_main-default"  style={{ textAlign: "center"}}>Дождитесь готовности на орбитальной станции</div>

    </Modal>)
}