import React from "react";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {connect} from "react-redux";
import {ETypesIngredient, Ingredient} from "../../store/ingredients/types";
import {deleteIngredient} from "../../store/ingredients/actions";

interface IBurgerConstructorProps {
    ingredients: Ingredient[],
    deleteIngredient: typeof deleteIngredient
}

export const BurgerConstructor = (props: IBurgerConstructorProps) => {
    const {ingredients, deleteIngredient} = props;
    const isLocked = (elem: Ingredient) => {
        return elem.type === ETypesIngredient.BUN;
    };
    const type = (elem: Ingredient): "top" | "bottom" | undefined => {
        if (ingredients[0].id === elem.id) {
            return 'top';
        }
        if (ingredients[ingredients.length - 1].id === elem.id) {
            return 'bottom';
        }
        return undefined;
    };
    const name = (elem: Ingredient): string => {
        if (ingredients[0].id === elem.id) {
            return elem.name + ' (верх)';
        }
        if (ingredients[ingredients.length - 1].id === elem.id) {
            return elem.name + ' (низ)';
        }
        return elem.name;
    };
    return (
        <div style={{height:'64vh', overflow: 'auto'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {ingredients.map(elem =>
                <ConstructorElement
                    key={elem.id}
                    type={type(elem)}
                    isLocked={isLocked(elem)}
                    text={name(elem)}
                    price={elem.price}
                    thumbnail={elem.image}
                    handleClose={() => {
                        deleteIngredient(elem)
                    }}
                />
            )}
            </div>
        </div>
    );
};

const mapStateToProps = (state: IBurgerConstructorProps) => ({
    ingredients: state.ingredients
});

export default connect(
    mapStateToProps,
    {deleteIngredient}
)(BurgerConstructor);