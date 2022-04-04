import styles from "./alert.module.css";
import {Modal} from "../modal/modal";
import React from "react";

interface IAlertProps {
    message: string,
    color: 'red' | 'blue' | 'green',
    handleClose: () => void;
}

export const Alert = (props: IAlertProps) => {
    return (<Modal width={720} handleClose={props.handleClose}><p className={styles.container}
                                                                 style={{backgroundColor: props.color}}>{props.message}</p>
    </Modal>);
};