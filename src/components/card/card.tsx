import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import './card.css'
import {connect} from "react-redux";
import {addIngredient, setIngredient} from "../../store/ingredients/actions";
import {ETypesIngredient, Ingredient} from "../../store/ingredients/types";

interface ICardProps {
    ingredients: Ingredient[],
    ingredient: Ingredient,
    addIngredient: typeof addIngredient,
    setIngredient: typeof setIngredient
}

const Card = (props: ICardProps) => {
    const {ingredient, addIngredient, setIngredient, ingredients} = props;
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
    return <div className='card' onClick={handleAdd}>
        <img src={ingredient.image}
             className='img-product'
             alt={ingredient.name}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p className='price text text_type_digits-default'>
                <span style={{paddingRight: '10px'}}>{ingredient.price}</span><CurrencyIcon type="primary"/>
            </p>
            <p className='name-product text text_type_main-default'>
                {ingredient.name}
            </p>
        </div>
    </div>
}

const mapStateToProps = (state: ICardProps) => ({
    ingredients: state.ingredients
});

export default connect(
    mapStateToProps,
    {addIngredient, setIngredient}
)(Card);