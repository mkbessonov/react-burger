import React, {useEffect} from "react";
import {getIngredients} from "../../service/ingredients-service";
import {Ingredient} from "../../store/ingredients/types";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import Card from "../card/card";

export const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = React.useState('bun');
    const [buns, setBuns] = React.useState([]);
    const [sauce, setSauce] = React.useState([]);
    const [main, setMain] = React.useState([]);
    useEffect(() => {
        getIngredients().then((result) => {
            const data = result.data.data;
            setBuns(data.filter((elem: Ingredient) => elem.type === 'bun'));
            setSauce(data.filter((elem: Ingredient) => elem.type === 'sauce'));
            setMain(data.filter((elem: Ingredient) => elem.type === 'main'));
        });
    }, []);
    return (
        <>
            <div className={styles.tab}>
                <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrentTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrentTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredients_cards}>
                <h2 className='text text_type_main-medium'>Булки</h2>
                <div className={styles.ingredients_block}>
                    {buns.map((elem: Ingredient, i) => <Card key={elem._id} ingredient={elem} index={i}/>)}
                </div>
                <h2 className='text text_type_main-medium'>Соусы</h2>
                <div className={styles.ingredients_block}>
                    {sauce.map((elem: Ingredient, i) => <Card key={elem._id} ingredient={elem} index={i}/>)}
                </div>
                <h2 className='text text_type_main-medium'>Начинки</h2>
                <div className={styles.ingredients_block}>
                    {main.map((elem: Ingredient, i) => <Card key={elem._id} ingredient={elem} index={i}/>)}
                </div>
            </div>
        </>
    );
};