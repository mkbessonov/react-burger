import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import {connect} from "react-redux";
import {useMemo, useState} from "react";
import styles from './place-an-order.module.css'
import {OrderDetails} from "../order-details/order-details";
import {getOrder} from "../../store/actions/order-details";
import {Ingredient} from "../../store/actions/types";
import {useAuth} from "../../service/auth";
import {useHistory} from "react-router";

interface IPlaceAnOrderProps {
    ingredients: Ingredient[];
    getOrder: (ingredients: string[]) => void;
}

const PlaceAnOrder = (props: IPlaceAnOrderProps) => {
    const {ingredients, getOrder} = props;
    const [open, setOpen] = useState<boolean>(false);
    const {getAndSetUser, ...auth} = useAuth();
    const history = useHistory();
    const sum = useMemo(() => {
        let newSum = 0;
        ingredients.forEach((elem) => {
            newSum = newSum + elem.price;
        });
        return newSum
    }, [ingredients]);
    const onClick = () => {
        if (auth.user.user) {
            getOrder(ingredients.map(elem => elem._id));
            setOpen(true);
        } else {
            history.replace('/login');
        }
    };

    return (
        <div className={styles.footer}>
            {ingredients.length > 0 && <>
                <div className={styles.sum}>
                    <p className="text text_type_digits-medium">{sum}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="medium" onClick={onClick}>
                    Оформить заказ
                </Button></>}
            {open && <OrderDetails handleClose={() => {
                setOpen(false)
            }}/>}
        </div>
    );

};

const mapStateToProps = (state: IPlaceAnOrderProps) => ({
    ingredients: state.ingredients
});

export default connect(
    mapStateToProps,
    {getOrder}
)(PlaceAnOrder);