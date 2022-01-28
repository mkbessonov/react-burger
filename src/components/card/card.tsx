import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './card.module.css'
import {connect} from "react-redux";
import {addIngredient, setIngredient} from "../../store/ingredients/actions";
import {ETypesIngredient, Ingredient} from "../../store/ingredients/types";
import {useState} from "react";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {Modal} from '../modal/modal';
import {clearIngredientInfo, setIngredientInfo} from "../../store/ingredient-info/actions";

interface ICardProps {
    ingredients: Ingredient[],
    ingredient: Ingredient,
    index: number,
    addIngredient: typeof addIngredient,
    setIngredient: typeof setIngredient,
    clearIngredientInfo: typeof clearIngredientInfo,
    setIngredientInfo: typeof setIngredientInfo
}

const Card = (props: ICardProps) => {
    const {
        ingredient,
        addIngredient,
        setIngredient,
        ingredients,
        index,
        setIngredientInfo,
        clearIngredientInfo
    } = props;

    const [open, setOpen] = useState<boolean>(false);

    const handleAdd = () => {
        if (ingredient.type !== ETypesIngredient.BUN && ingredients.length === 0) {
            alert('Сначала выберите булку');
            return;
        }
        if (ingredient.type === ETypesIngredient.BUN && ingredients.length !== 0) {
            setIngredient(ingredient, 0);
            setIngredient(ingredient, ingredients.length - 1);
            return;
        }
        if (ingredient.type === ETypesIngredient.BUN && ingredients.length === 0) {
            addIngredient(ingredient);
            addIngredient(ingredient);
            return;
        }
        addIngredient(ingredient);
    };

    const handleOpen = () => {
        handleAdd();
        setIngredientInfo(ingredient);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        clearIngredientInfo()
    };

    return (
        <>
            <div className={styles.card} onClick={handleOpen} style={index % 2 === 0 ? {} : {padding: 0}}>
                <img src={ingredient.image}
                     className={styles.img_product}
                     alt={ingredient.name}/>
                <div className={styles.text_product}>
                    <p className={'text text_type_digits-default ' + styles.price}>
                        <span>{ingredient.price}</span><CurrencyIcon type="primary"/>
                    </p>
                    <p className={'text text_type_main-default ' + styles.name_product}>
                        {ingredient.name}
                    </p>
                </div>

            </div>
            {
                open && <Modal width={720} handleClose={handleClose}>
                    <IngredientDetails/>
                </Modal>
            }
        </>
    );
};

const mapStateToProps = (state: ICardProps) => ({
    ingredients: state.ingredients
});

export default connect(
    mapStateToProps,
    {addIngredient, setIngredient, setIngredientInfo, clearIngredientInfo}
)(Card);