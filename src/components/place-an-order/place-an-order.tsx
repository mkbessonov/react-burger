import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import {connect} from "react-redux";
import {Ingredient} from "../../store/ingredients/types";
import {useMemo, useState} from "react";
import styles from './place-an-order.module.css'
import {OrderDetails} from "../order-details/order-details";
import {Modal} from "../modal/modal";
import {getOrder} from "../../store/order-details/actions";

interface IPlaceAnOrderProps {
    ingredients: Ingredient[];
    getOrder: (ingredients: string[]) => void;
}

const PlaceAnOrder = (props: IPlaceAnOrderProps) => {
    const {ingredients, getOrder} = props;
    const [open, setOpen] = useState<boolean>(false);
    const sum = useMemo(() => {
        let newSum = 0;
        ingredients.forEach((elem) => {
            newSum = newSum + elem.price;
        });
        return newSum
    }, [ingredients]);
    if (ingredients.length > 0) {
        return (
            <div className={styles.footer}>
                <div className={styles.sum}>
                    <p className="text text_type_digits-medium">{sum}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="medium" onClick={() => {
                    getOrder(ingredients.map(elem => elem._id));
                    setOpen(true)
                }}>
                    Оформить заказ
                </Button>
                {open && <Modal width={720} handleClose={() => {
                    setOpen(false)
                }}><OrderDetails/></Modal>}
            </div>
        );
    }
    return null;
};

const mapStateToProps = (state: IPlaceAnOrderProps) => ({
    ingredients: state.ingredients
});

export default connect(
    mapStateToProps,
    {getOrder}
)(PlaceAnOrder);