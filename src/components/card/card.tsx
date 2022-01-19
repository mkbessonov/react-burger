import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './card.module.css'
import {connect} from "react-redux";
import {addIngredient, setIngredient} from "../../store/ingredients/actions";
import {ETypesIngredient, Ingredient} from "../../store/ingredients/types";
import {useState} from "react";
import {IngredientDetails} from "../ingredient-details/ingredient-details";

interface ICardProps {
    ingredients: Ingredient[],
    ingredient: Ingredient,
    index: number,
    addIngredient: typeof addIngredient,
    setIngredient: typeof setIngredient
}

const Card = (props: ICardProps) => {
    const {ingredient, addIngredient, setIngredient, ingredients, index} = props;
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
        setOpen(true);
    }
    return (<>
        <div className={styles.card} onClick={handleOpen} style={index % 2 === 0 ? {} : {padding: 0}}>
            <img src={ingredient.image}
                 className={styles.img_product}
                 alt={ingredient.name}/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p className={'text text_type_digits-default ' + styles.price}>
                    <span style={{paddingRight: '10px'}}>{ingredient.price}</span><CurrencyIcon type="primary"/>
                </p>
                <p className={'text text_type_main-default ' + styles.name_product}>
                    {ingredient.name}
                </p>
            </div>

        </div>
        {
            open && <IngredientDetails ingredient={ingredient} handleClose={() => setOpen(false)}/>
        }
    </>);
}

const mapStateToProps = (state: ICardProps) => ({
    ingredients: state.ingredients
});

export default connect(
    mapStateToProps,
    {addIngredient, setIngredient}
)(Card);