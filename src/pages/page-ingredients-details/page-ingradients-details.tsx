import React from "react";
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details";
import styles from './page-ingradients-details.module.css'

export const PageIngredientsDetails = () => {
    return (<div className={styles.center}>
            <IngredientDetails page={true}/>
        </div>
    );
};