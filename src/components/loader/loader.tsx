import styles from './loader.module.css'
import {createPortal} from "react-dom";
import React from "react";

const modal = document.getElementById("modal")!;
export const Loader = () => {
    return (createPortal(<div className={styles.container}>
            <div className={`${styles.bars_common} ${styles.bar_one}`}/>
            <div className={`${styles.bars_common} ${styles.bar_two}`}/>
            <div className={`${styles.bars_common} ${styles.bar_three}`}/>

            <div className={`${styles.squares_common} ${styles.square_one}`}/>
            <div className={`${styles.squares_common} ${styles.square_two}`}/>
        </div>, modal)
    );
};