import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import {connect} from "react-redux";
import {deleteIngredient} from "../../store/ingredients/actions";
import {Ingredient} from "../../store/ingredients/types";
import {useEffect, useState} from "react";
import styles from './place-an-order.module.css'
import {OrderDetails} from "../order-details/order-details";

interface IPlaceAnOrderProps {
    ingredients: Ingredient[];
}

const PlaceAnOrder = (props: IPlaceAnOrderProps) => {
    const {ingredients} = props;
    const [sum, setSum] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        let newSum = 0;
        ingredients.forEach((elem) => {
            newSum = newSum + elem.price;
        });
        setSum(newSum);
    }, [ingredients]);

    if (ingredients.length > 0) {
        return (
            <div className={styles.footer}>
                <div className={styles.sum}>
                    <p className="text text_type_digits-medium">{sum}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="medium" onClick={() => {
                    setOpen(true)
                }}>
                    Оформить заказ
                </Button>
                {open && <OrderDetails handleClose={() => {
                    setOpen(false)
                }}/>}
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
    {deleteIngredient}
)(PlaceAnOrder);