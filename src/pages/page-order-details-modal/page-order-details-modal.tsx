import React from "react";
import styles from './page-ingradients-details.module.css'
import {OrderDetailsModal} from "../../components/order-details-modal/order-details-modal";

export const PageOrderDetails = () => {
    return (<div className={styles.center}>
            <OrderDetailsModal/>
        </div>
    );
};