import React, {useEffect, useRef} from "react";
import {Ingredient} from "../../store/ingredients/types";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import Card from "../card/card";
import {connect} from "react-redux";

interface IBurgerIngredientsProps {
    constructorElements: Ingredient[];
}

const BurgerIngredients = (props: IBurgerIngredientsProps) => {
        const {constructorElements} = props;

        const [currentTab, setCurrentTab] = React.useState('bun');

        const [buns, setBuns] = React.useState<Ingredient[]>([]);
        const [sauce, setSauce] = React.useState<Ingredient[]>([]);
        const [main, setMain] = React.useState<Ingredient[]>([]);

        useEffect(() => {
            setBuns(constructorElements.filter((elem: Ingredient) => elem.type === 'bun'));
            setSauce(constructorElements.filter((elem: Ingredient) => elem.type === 'sauce'));
            setMain(constructorElements.filter((elem: Ingredient) => elem.type === 'main'));
        }, [constructorElements]);

        const block = useRef<HTMLDivElement>(null);
        const bunsRef = useRef<HTMLDivElement>(null);
        const sauceRef = useRef<HTMLDivElement>(null);
        const mainRef = useRef<HTMLDivElement>(null);

        const handleScroll = () => {
            const tabTop = block.current?.getBoundingClientRect().top || 0;
            const bunsDistance = (bunsRef.current?.getBoundingClientRect().top || 0) > tabTop ? (bunsRef.current?.getBoundingClientRect().top || 0 - tabTop) : tabTop - (bunsRef.current?.getBoundingClientRect().top || 0);
            const sauceDistance = (sauceRef.current?.getBoundingClientRect().top || 0) > tabTop ? (sauceRef.current?.getBoundingClientRect().top || 0 - tabTop) : tabTop - (sauceRef.current?.getBoundingClientRect().top || 0);
            const mainDistance = (mainRef.current?.getBoundingClientRect().top || 0) > tabTop ? (mainRef.current?.getBoundingClientRect().top || 0 - tabTop) : tabTop - (mainRef.current?.getBoundingClientRect().top || 0);

            const res = Math.min(bunsDistance, sauceDistance, mainDistance);

            switch (res) {
                case bunsDistance: {
                    setCurrentTab('bun');
                    break;
                }
                case sauceDistance: {
                    setCurrentTab('sauce');
                    break;
                }
                default:
                    setCurrentTab('main');
            }

        };
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
                <div className={styles.ingredients_cards} ref={block} onScroll={handleScroll}>
                    <h2 className='text text_type_main-medium' ref={bunsRef}>Булки</h2>
                    <div className={styles.ingredients_block}>
                        {buns.map((elem: Ingredient, i) => <Card key={elem._id} ingredient={elem} index={i}/>)}
                    </div>
                    <h2 className='text text_type_main-medium' ref={sauceRef}>Соусы</h2>
                    <div className={styles.ingredients_block}>
                        {sauce.map((elem: Ingredient, i) => <Card key={elem._id} ingredient={elem} index={i}/>)}
                    </div>
                    <h2 className='text text_type_main-medium' ref={mainRef}>Начинки</h2>
                    <div className={styles.ingredients_block}>
                        {main.map((elem: Ingredient, i) => <Card key={elem._id} ingredient={elem} index={i}/>)}
                    </div>
                </div>
            </>
        );
    }
;

const mapStateToProps = (state: IBurgerIngredientsProps) => ({
    constructorElements: state.constructorElements
});

export default connect(
    mapStateToProps,
    {}
)(BurgerIngredients);