import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import {connect} from "react-redux";
import {deleteIngredient} from "../../store/ingredients/actions";
import {Ingredient} from "../../store/ingredients/types";
import {useEffect, useState} from "react";
import './place-an-order.css'

interface IPlaceAnOrderProps {
    ingredients: Ingredient[];
}

const PlaceAnOrder = (props: IPlaceAnOrderProps) => {
    const {ingredients} = props;
    const [sum, setSum] = useState<number>(0);
    useEffect(() => {
        let newSum = 0;
        ingredients.forEach((elem) => {
            newSum = newSum + elem.price;
        });
        setSum(newSum);
    }, [ingredients]);

    if (ingredients.length > 0) {
        return <div className='footer'>
            <div className='sum'>
                <p className="text text_type_main-large">{sum}</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="medium">
                Оформить заказ
            </Button></div>
    }
    return null;
}

const mapStateToProps = (state: IPlaceAnOrderProps) => ({
    ingredients: state.ingredients
});

export default connect(
    mapStateToProps,
    {deleteIngredient}
)(PlaceAnOrder);