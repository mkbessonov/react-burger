import {ETypesIngredient, Ingredient} from "../../store/actions/types";
import styles from './ingredient-details.module.css'
import {useLocation} from "react-router-dom";
import {getIngredients} from "../../service/ingredients-service";
import {useEffect, useState} from "react";

export const IngredientDetails = () => {
    const location = useLocation();
    const path = location.pathname.split('/');
    const id = path[path.length - 1];
    const [ingredientInfo, setIngredientInfo] = useState<Ingredient>({
        __v: 0,
        _id: "",
        calories: 0,
        carbohydrates: 0,
        fat: 0,
        image: "",
        image_large: "",
        image_mobile: "",
        name: "",
        price: 0,
        proteins: 0,
        type: ETypesIngredient.BUN
    });
    useEffect(() => {
        getIngredients().then((result) => {
            if (result.data.success) {
                const ingredients = result.data.data;
                setIngredientInfo(ingredients.filter((elem: Ingredient) => (elem._id === id))[0] || null);
            } else {
                alert('Неизвестная ошибка')
            }
        }).catch(() => {
            alert('Ошибка');
        })
    }, []);

    return (
        <div className={styles.ingredient_content}>
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

