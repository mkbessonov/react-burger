import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './card.module.css'
import {connect} from "react-redux";
import {Ingredient} from "../../store/ingredients/types";
import {useState} from "react";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {Modal} from '../modal/modal';
import {clearIngredientInfo, setIngredientInfo} from "../../store/ingredient-info/actions";
import {useDrag} from "react-dnd";

interface ICardProps {
    ingredients: Ingredient[],
    ingredient: Ingredient,
    index: number,
    clearIngredientInfo: typeof clearIngredientInfo,
    setIngredientInfo: typeof setIngredientInfo
}

const Card = (props: ICardProps) => {
    const {
        ingredient,
        index,
        setIngredientInfo,
        clearIngredientInfo
    } = props;

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIngredientInfo(ingredient);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        clearIngredientInfo()
    };

    const [, drag] = useDrag({
        type: 'ingredients',
        item: ingredient
    });

    return (
        <>
            <div className={styles.card} draggable style={index % 2 === 0 ? {} : {padding: 0}} ref={drag} onClick={handleOpen}>
                {ingredient.count && <Counter count={ingredient.count} size="small" />}
                <img src={ingredient.image}
                     className={styles.img_product}
                     draggable={false}
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
    {setIngredientInfo, clearIngredientInfo}
)(Card);