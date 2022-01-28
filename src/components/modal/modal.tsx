import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css'
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import {ReactNode, useEffect} from "react";

interface IModalProps {
    children: ReactNode,
    handleClose: () => void,
    width: number
}

export const Modal = (props: IModalProps) => {
    useEffect(() => {
        const closeModal = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                props.handleClose();
            }
        };
        window.addEventListener("keydown", closeModal);
        return () => window.removeEventListener("keydown", closeModal)
    }, [props.handleClose]);
    return (
        <ModalOverlay handleClose={props.handleClose}>
            <div className={styles.modal_window} style={{width: props.width}}>
            <span className={"text text_type_main-medium " + styles.close} onClick={props.handleClose}><CloseIcon
                type="primary"/></span>
                {props.children}
            </div>
        </ModalOverlay>
    );
};