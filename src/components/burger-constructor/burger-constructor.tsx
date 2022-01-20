import React from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {connect} from "react-redux";
import {ETypesIngredient, Ingredient} from "../../store/ingredients/types";
import {deleteIngredient} from "../../store/ingredients/actions";
import styles from './burger-constructor.module.css'

interface IBurgerConstructorProps {
    ingredients: Ingredient[],
    deleteIngredient: typeof deleteIngredient
}

const BurgerConstructor = (props: IBurgerConstructorProps) => {
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
        <div className={styles.burger_constructor_list}>
            {ingredients.map((elem, index) => (
                    <div className={styles.item}>
                        {index !== 0 && index !== ingredients.length - 1 &&
                            <span className={styles.drag_icon}> <DragIcon type="primary"/></span>}
                        <span className={styles.elem_list}
                              style={(index === 0 || index === ingredients.length - 1) ? {paddingLeft: '37.5px'} : {}}>
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
                    </span>
                    </div>
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
    {deleteIngredient}
)(BurgerConstructor);