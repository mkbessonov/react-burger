import {Ingredient, IOrderInfo} from "../../store/actions/types";
import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import styles from './order-item-list.module.css'
import moment from "moment";
import "moment/locale/ru";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useLocation} from "react-router-dom";
import {useHistory} from "react-router";

interface IOrderItemListProps {
    order: IOrderInfo
}

export const OrderItemList = (props: IOrderItemListProps) => {
    const {order} = props;
    const location = useLocation();
    const {ingredients} = useSelector((state: IRootState) => state.constructorElements);
    const ingredientsImg = useMemo(() => {
        const images: string[] = [];
        ingredients.forEach((item: Ingredient) => {
            for (let i = 0; i < order.ingredients.length; i++) {
                if (item._id === order.ingredients[i]) {
                    images.push(item.image);
                }
            }
        });
        return images;
    }, [order, ingredients]);
    const createdAt: moment.Moment = moment(order.createdAt);

    const date = useMemo<string>(() => {
        const gmt: string = createdAt.format("Z").slice(0, 3);
        return `${createdAt.fromNow()}, ${createdAt.format("hh:mm")} i-GMT${gmt.slice(
            0,
            1
        )}${+gmt.slice(1)}`;
    }, [createdAt]);

    const price = useMemo<number>(() => order.ingredients.reduce((accumulator: any, currentValue: any) => {
        for (let i = 0; i < ingredients.length; i++) {
            if (currentValue === ingredients[i]._id) {
                return accumulator + ingredients[i].price;
            }
        }
    }, 0), []);
    const status: string = order.status === "created" ? "Создан" : order.status === "pending" ? "Готовится" : order.status === "done" ? "Выполнен" : "";
    const history = useHistory();
    const handleOpen = () => {
        history.replace((location.pathname.includes("/profile/orders") ? '/profile/orders/' : '/feed/') + order._id, {background: location});
    };
    return (<div className={styles.list_item} onClick={handleOpen}>
            <div className={styles.row}>
                <p className="text text_type_digits-default">#{order.number}</p>
                <p className="text text_type_main-default text_color_inactive">
                    {date}
                </p>
            </div>
            <div className={"text text_type_main-medium mt-6"}>{order.name}</div>
            {location.pathname === "/profile/orders" && (
                <p className={`text text_type_main-default mt-2`}
                   style={order.status === "done" ? {color: "#00CCCC"} : {color: "#F2F2F3"}}>
                    {status}
                </p>
            )}
            <div className={`${styles.row} mt-6`}>
                <div className={styles.ingredients}>
                    {ingredientsImg &&
                    ingredientsImg.map(
                        (item: string, index: number) =>
                            index < 6 && (
                                <div key={index} className={styles.ingredient_item}
                                     style={ingredientsImg.length > 6 ? {opacity: .5} : {}}>
                                    <img className={styles.img} src={item} alt={'ингредиент'}/>
                                </div>
                            )
                    )}
                    {ingredientsImg.length > 6 && (
                        <p className={`${styles.counter} text text_type_main-default`}>
                            +{ingredientsImg.length - 6}
                        </p>
                    )}
                </div>
                <div className={styles.total}>
                    <p className={`text text_type_digits-default pr-2`}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </div>
    );
}