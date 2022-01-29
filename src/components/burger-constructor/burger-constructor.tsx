import React from "react";
import {connect} from "react-redux";
import {Ingredient} from "../../store/ingredients/types";
import {deleteIngredient, moveIngredient} from "../../store/ingredients/actions";
import styles from './burger-constructor.module.css'
import {decrement} from "../../store/constructor-elements/actions";
import {BurgerConstructorElem} from "../burger-constructor-elem/burger-constructor-elem";

interface IBurgerConstructorProps {
    ingredients: Ingredient[],
    deleteIngredient: typeof deleteIngredient,
    decrement: typeof decrement,
    moveIngredient: typeof moveIngredient
}

const BurgerConstructor = (props: IBurgerConstructorProps) => {
    const {ingredients, deleteIngredient, decrement, moveIngredient} = props;

    return (
        <div className={styles.burger_constructor_list}>
            {ingredients.map((elem, index) => (
                    <BurgerConstructorElem elem={elem}
                                           key={elem.id}
                                           index={index}
                                           decrement={decrement}
                                           moveIngredient={moveIngredient}
                                           deleteIngredient={deleteIngredient}
                                           ingredients={ingredients}/>
                )
            )}
        </div>
    );
};

const mapStateToProps = (state: IBurgerConstructorProps) => ({
    ingredients: state.ingredients
});

export default connect(
    mapStateToProps,
    {deleteIngredient, decrement, moveIngredient}
)(BurgerConstructor);