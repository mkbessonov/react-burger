import {Modal} from "../modal/modal";
import {Ingredient} from "../../store/ingredients/types";
import styles from './ingredient-details.module.css'

interface IIngredientDetailsProps {
    handleClose: () => void,
    ingredient: Ingredient
}

export const IngredientDetails = (props: IIngredientDetailsProps) => {
    const {ingredient, handleClose} = props;
    return (
        <Modal width={720} handleClose={() => {
            handleClose();
        }}>
            <div className={styles.ingredient_content}>
                <div className="text text_type_main-large">Детали ингредиента</div>
                <div className={styles.ingredient_img}><img src={ingredient.image_large} height='240px'
                                                            alt={ingredient.name}/></div>
                <p className={'text text_type_main-medium ' + styles.ingredient_name}>
                    {ingredient.name}
                </p>
                <div className={'text_color_inactive ' + styles.ingredient_info}>
                    <div className={styles.cell}>
                        <div className='text text_type_main-default'>Калории, ккал</div>
                        <div className="text text_type_digits-default">{ingredient.calories}</div>
                    </div>
                    <div className={styles.cell}>
                        <div className='text text_type_main-default'>Белки, г</div>
                        <div className="text text_type_digits-default">{ingredient.proteins}</div>
                    </div>
                    <div className={styles.cell}>
                        <div className='text text_type_main-default'>Жиры, г</div>
                        <div className="text text_type_digits-default">{ingredient.fat}</div>
                    </div>
                    <div className={styles.cell}>
                        <div className='text text_type_main-default'>Углеводы, г</div>
                        <div className="text text_type_digits-default">{ingredient.carbohydrates}</div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};