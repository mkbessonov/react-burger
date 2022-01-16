import {Modal} from "../modal/modal";
import {Ingredient} from "../../store/ingredients/types";

interface IIngredientDetailsProps {
    handleClose: () => void,
    ingredient: Ingredient
}

export const IngredientDetails = (props: IIngredientDetailsProps) => {
    const {ingredient, handleClose} = props;
    return (<Modal handleClose={() => {
        handleClose();
    }}>
        <div className="text text_type_main-medium">Детали ингредиента</div>
        <img src={ingredient.image}
             style={{margin:"auto", display: "flex", width: '100%'}}
             alt={ingredient.name}/>
        <p className='name-product text text_type_main-default'>
            {ingredient.name}
        </p>
        <div style={{display: "flex", justifyContent: "space-between"}} className='text_color_inactive' >
            <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
                <div className='text text_type_main-default' >Калории, ккал</div>
                <div className="text text_type_digits-default">{ingredient.calories}</div>
            </div>
            <div  style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
                <div className='text text_type_main-default' >Белки, г</div>
                <div className="text text_type_digits-default">{ingredient.proteins}</div>
            </div>
            <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
                <div className='text text_type_main-default' >Жиры, г</div>
                <div className="text text_type_digits-default">{ingredient.fat}</div>
            </div>
            <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
                <div className='text text_type_main-default' >Углеводы, г</div>
                <div className="text text_type_digits-default">{ingredient.carbohydrates}</div>
            </div>
        </div>
    </Modal>)
}