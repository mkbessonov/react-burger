import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import './main.css'
import PlaceAnOrder from "../place-an-order/place-an-order";

export const Main = () => {
    return (
        <main>
            <div className='main'>
                <div className='left-panel'>
                    <article>
                        <h2 className='text text_type_main-large'>Соберите бургер</h2>
                    </article>
                    <BurgerIngredients/>
                </div>
                <div className='right-panel'>
                    <BurgerConstructor/>
                    <PlaceAnOrder/>
                </div>
            </div>
        </main>
    );
};