import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './main.module.css'
import PlaceAnOrder from "../place-an-order/place-an-order";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {addIngredient, setIngredient} from "../../store/ingredients/actions";
import {ETypesIngredient, Ingredient} from "../../store/ingredients/types";
import {IRootState} from "../../store/store";
import {decrement, increment} from "../../store/constructor-elements/actions";

export const Main = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector((state: IRootState) => state.ingredients);
    const [{isOver, canDrop}, drop] = useDrop({
        accept: "ingredients",
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        drop(ingredient: Ingredient) {
            if (ingredient.type !== ETypesIngredient.BUN && ingredients.length === 0) {
                alert('Сначала выберите булку');
                return;
            }
            if (ingredient.type === ETypesIngredient.BUN && ingredients.length !== 0) {
                ingredient._id && dispatch(decrement(ingredients[0]._id));
                ingredient._id && dispatch(decrement(ingredients[0]._id));
                dispatch(setIngredient({...ingredient, index: 0}, 0));
                dispatch(setIngredient({...ingredient, index: ingredients.length - 1}, ingredients.length - 1));
                ingredient._id && dispatch(increment(ingredient._id));
                ingredient._id && dispatch(increment(ingredient._id));
                return;
            }
            if (ingredient.type === ETypesIngredient.BUN && ingredients.length === 0) {
                dispatch(addIngredient({...ingredient, index: 0}));
                dispatch(addIngredient({...ingredient, index: 1}));
                ingredient._id && dispatch(increment(ingredient._id));
                ingredient._id && dispatch(increment(ingredient._id));
                return;
            }
            dispatch(addIngredient({...ingredient, index: ingredients.length - 2}));
            ingredient._id && dispatch(increment(ingredient._id));
        },
    });
    const isActive = canDrop && isOver;
    let border = 'none'
    if (isActive) {
        border = '1px solid #5b5bff';
    } else if (canDrop) {
        border = '1px solid white';
    }
    return (
        <main>
            <div className={styles.main}>
                <div className={styles.left_panel}>
                    <article>
                        <h2 className='text text_type_main-large'>Соберите бургер</h2>
                    </article>
                    <BurgerIngredients/>
                </div>
                <div className={styles.right_panel} ref={drop} style={{border}}>
                    <BurgerConstructor/>
                    <PlaceAnOrder/>
                </div>
            </div>
        </main>
    );
};