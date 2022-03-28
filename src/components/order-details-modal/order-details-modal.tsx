import React, {useMemo} from "react";
import {useLocation, useParams} from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-details-modal.module.css";
import {IRootState} from "../../store/store";
import {Ingredient, IOrderInfo} from "../../store/actions/types";
import {useSelector} from "react-redux";

export const OrderDetailsModal = () => {
    const location = useLocation();
    const {feeds, userFeeds} = useSelector((state: IRootState) => state.wsReducer);
    const {ingredients} = useSelector((state: IRootState) => state.constructorElements);

    const item = location.pathname === "/profile/orders" ? userFeeds : feeds;
    const orderId: string = useParams<{ id: string }>().id;

    const currentOrder = useMemo<IOrderInfo>(
        () => item?.orders.filter((item: IOrderInfo) => item._id === orderId)[0],
        [orderId, item.orders]
    );

    const date = useMemo<string>(() => {
        const date = moment(currentOrder?.createdAt);
        const newDate: string = date?.format("Z").slice(0, 3);
        return `${date?.fromNow()}, ${date?.format("hh:mm")} i-GMT${newDate?.slice(0, 1)}${+newDate?.slice(1)}`;
    }, []);

    const price = useMemo<number>(() => currentOrder.ingredients.reduce((accumulator: number, currentValue: string) => {
        for (let i = 0; i < ingredients.length; i++) {
            if (currentValue === ingredients[i]._id) {
                return accumulator + ingredients[i].price;
            }
        }
    }, 0), []);
    const currentIngredients = useMemo<Ingredient[]>(() => currentOrder.ingredients.map((currentValue: string) => {
        for (let i = 0; i < ingredients.length; i++) {
            if (currentValue === ingredients[i]._id) {
                return ingredients[i];
            }
        }
    }, 0), []);

    const status = currentOrder?.status === "created" ? "Создан" : currentOrder?.status === "pending" ? "Готовится" : "Выполнен";

    return (
        <>
            <div className={styles.container}>
                <p className={"text text_type_digits-default mt-5 mb-10"}>
                    #{currentOrder.number}
                </p>
                <p className="text text_type_main-medium mb-2">
                    {currentOrder.name}
                </p>
                <p className={"text text_type_main-default mb-15"}
                   style={currentOrder?.status === "done" ? {color: "#00CCCC"} : {}}>
                    {status}
                </p>
                <p className="text text_type_main-medium mb-6">Состав:</p>
                <div className={`${styles.list} mb-15`}>
                    {
                        currentIngredients.map((item) => (
                            <div className={`${styles.list_item} mb-4`}>
                                <div className={styles.ingredient}>
                                    <div className={styles.ingredient_item}>
                                        <img className={styles.img} src={item.image} alt={'ингредиент'}/>
                                    </div>
                                    <h2 className="text text_type_main-default">{item.name}</h2>
                                </div>
                                <div className={styles.price}>
                                    <p className={`text text_type_digits-default pr-2`}>{2} x </p>
                                    <p className={`text text_type_digits-default pr-2`}>
                                        {item.price}
                                    </p>
                                    <CurrencyIcon type="primary"/>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className={styles.row}>
                    <p className="text text_type_main-default text_color_inactive">
                        {date}
                    </p>
                    <div className={styles.total}>
                        <p className={`text text_type_digits-default pr-2`}>
                            {price}
                        </p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>
            </div>
        </>
    );
};