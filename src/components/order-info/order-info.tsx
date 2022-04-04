import React, {useMemo} from "react";
import styles from "./order-info.module.css";
import {TWSState} from "../../store/reducers/ws-reducer";
import {useSelector} from "../../store/hooks";

export const OrderInfo = () => {
    const { feeds }: TWSState = useSelector((state) => state.wsReducer);

    const doneItems = useMemo<Array<number>>(() => {
        return feeds?.orders
            .filter((item) => item.status === "done")
            .map((item) => {
                return item.number;
            });
    }, [feeds]);

    const createdItems = useMemo<Array<number>>(() => {
        return feeds?.orders
            .filter((item) => item.status === "created")
            .map((item) => {
                return item.number;
            });
    }, [feeds]);

    return (
        <section className={`${styles.main} mt-5`}>
            <div className={`${styles.order_container} mb-15`}>
                <div className={styles.row}>
                    <p className="text text_type_main-medium mb-5">Готовы:</p>
                    <div className={styles.orders}>
                        {doneItems.map((item, index) => (
                            <p
                                className={`${styles.done_number} text text_type_digits-default mb-2 mr-5`}
                                key={index}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.row}>
                    <p className="text text_type_main-medium  mb-5">В работе:</p>
                    <div className={styles.orders}>
                        {createdItems.map((item, index) => (
                            <p
                                className={'text text_type_digits-default mb-2 mr-5'}
                                key={index}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
                <p className="text text_type_main-medium">Выполнено за все время:</p>
                <p className={`${styles.total} text text_type_digits-large mb-15`}>
                    {feeds.total}
                </p>
                <p className="text text_type_main-medium">Выполнено за сегодня:</p>
                <p className={`${styles.total} text text_type_digits-large`}>
                    {feeds.totalToday}
                </p>
        </section>
    );
};
