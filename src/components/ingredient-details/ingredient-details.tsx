import {Ingredient} from "../../store/actions/types";
import styles from './ingredient-details.module.css'
import {connect} from "react-redux";

interface IIngredientDetailsProps {
    ingredientInfo: Ingredient
}

const IngredientDetails = (props: IIngredientDetailsProps) => {
    const {ingredientInfo} = props;
    return (
        ingredientInfo && <div className={styles.ingredient_content}>
            <div className="text text_type_main-large">Детали ингредиента</div>
            <div className={styles.ingredient_img}><img src={ingredientInfo.image_large} height='240px'
                                                        alt={ingredientInfo.name}/></div>
            <p className={'text text_type_main-medium ' + styles.ingredient_name}>
                {ingredientInfo.name}
            </p>
            <div className={'text_color_inactive ' + styles.ingredient_info}>
                <div className={styles.cell}>
                    <div className='text text_type_main-default'>Калории, ккал</div>
                    <div className="text text_type_digits-default">{ingredientInfo.calories}</div>
                </div>
                <div className={styles.cell}>
                    <div className='text text_type_main-default'>Белки, г</div>
                    <div className="text text_type_digits-default">{ingredientInfo.proteins}</div>
                </div>
                <div className={styles.cell}>
                    <div className='text text_type_main-default'>Жиры, г</div>
                    <div className="text text_type_digits-default">{ingredientInfo.fat}</div>
                </div>
                <div className={styles.cell}>
                    <div className='text text_type_main-default'>Углеводы, г</div>
                    <div className="text text_type_digits-default">{ingredientInfo.carbohydrates}</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: IIngredientDetailsProps) => ({
    ingredientInfo: state.ingredientInfo
});

export default connect(
    mapStateToProps,
    {}
)(IngredientDetails);
