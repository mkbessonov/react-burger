import React, {useEffect} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../card/card";
import './tab-burger-ingredients.css'
import {getIngredients} from "../../service/ingredients-service";
import {Ingredient} from "../../store/ingredients/types";

export const TabBurgersIngredients = () => {
    const [currentTab, setCurrentTab] = React.useState('bun');
    const [bulks, setBulks] = React.useState([]);
    const [sauce, setSauce] = React.useState([]);
    const [main, setMain] = React.useState([]);
    useEffect(()=>{
        getIngredients().then((result) => {
            const data = result.data.data;
            setBulks(data.filter((elem: Ingredient) => elem.type === 'bun'));
            setSauce(data.filter((elem: Ingredient) => elem.type === 'sauce'));
            setMain(data.filter((elem: Ingredient) => elem.type === 'main'));
        });
    },[])
    return (
        <div>
            <div style={{display: 'flex'}}>
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
            <div style={{overflow:"auto", maxHeight: '70vh', paddingTop: '40px'}}>
                <h2 className='text text_type_main-medium'>Булки</h2>
                <div className='ingredients-block'>
                    {bulks.map((elem: Ingredient) => <Card key={elem._id} ingredient={elem}/>)}
                </div>
                <h2 className='text text_type_main-medium'>Соусы</h2>
                <div className='ingredients-block'>
                    {sauce.map((elem: Ingredient) => <Card key={elem._id} ingredient={elem}/>)}
                </div>
                <h2 className='text text_type_main-medium'>Начинки</h2>
                <div className='ingredients-block'>
                    {main.map((elem: Ingredient) => <Card key={elem._id} ingredient={elem}/>)}
                </div>
            </div>
        </div>
    )
}