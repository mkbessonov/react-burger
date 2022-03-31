import {Ingredient} from "../../store/actions/types";
import styles from './ingredient-details.module.css'
import {useLocation} from "react-router-dom";
import {useMemo} from "react";
import {useSelector} from "../../store/hooks";
import {useHistory} from "react-router";

interface IIngredientDetailsProps {
    page?: boolean;
}

export const IngredientDetails = (props: IIngredientDetailsProps) => {
    const location = useLocation();
    const path = location.pathname.split('/');
    const id = path[path.length - 1];
    const history = useHistory();

    const constructorElements = useSelector((state) => state.constructorElements);
    const ingredientInfo = useMemo(() => (constructorElements.ingredients.filter((elem: Ingredient) => (elem._id === id))[0] || null), [constructorElements])
    if (!ingredientInfo) {
        history.replace('/ingredients');
        return null;
    }
    return (
        <div className={styles.ingredient_content}>
            <div className="text text_type_main-large"
                 style={props.page ? {textAlign: "center"} : {textAlign: "left"}}>Детали ингредиента
            </div>
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

