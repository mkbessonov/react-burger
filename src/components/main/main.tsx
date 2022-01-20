import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './main.module.css'
import PlaceAnOrder from "../place-an-order/place-an-order";
import {Ingredient} from "../../store/ingredients/types";

interface IMainProps {
    buns: Ingredient[];
    sauce: Ingredient[];
    main: Ingredient[];
}

export const Main = (props: IMainProps) => {
    const {buns, sauce, main} = props
    return (
        <main>
            <div className={styles.main}>
                <div className={styles.left_panel}>
                    <article>
                        <h2 className='text text_type_main-large'>Соберите бургер</h2>
                    </article>
                    <BurgerIngredients sauce={sauce} buns={buns} main={main}/>
                </div>
                <div className={styles.right_panel}>
                    <BurgerConstructor/>
                    <PlaceAnOrder/>
                </div>
            </div>
        </main>
    );
};