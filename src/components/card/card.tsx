import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './card.module.css'
import {connect} from "react-redux";
import {Ingredient} from "../../store/actions/types";
import {clearIngredientInfo, setIngredientInfo} from "../../store/actions/ingredient-info";
import {useDrag} from "react-dnd";
import {useHistory, useLocation} from "react-router";

interface ICardProps {
    ingredients: Ingredient[],
    ingredient: Ingredient,
    index: number,
    setIngredientInfo: typeof setIngredientInfo
}

const Card = (props: ICardProps) => {
    const {
        ingredient,
        index,
        setIngredientInfo,
    } = props;
    const history = useHistory();
    const location = useLocation();


    const handleOpen = () => {
        setIngredientInfo(ingredient);
        history.replace('/ingredients/' + ingredient._id, {background: location});
    };

    const [, drag] = useDrag({
        type: 'ingredients',
        item: ingredient
    });

    return (
        <>
            <div className={styles.card} draggable style={index % 2 === 0 ? {} : {padding: 0}} ref={drag}
                 onClick={handleOpen}>
                {ingredient.count && <Counter count={ingredient.count} size="small"/>}
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