import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css'
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import {ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";
import {useHistory} from "react-router";

interface IModalProps {
    children: ReactNode,
    handleClose?: () => void,
    width: number
}

const modal = document.getElementById("modal")!;

export const Modal = (props: IModalProps) => {
    const history = useHistory();
    const handleClose = props.handleClose || (function () {
        history.replace({pathname: '/ingredients'})
    });
    useEffect(() => {
        const closeModal = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener("keydown", closeModal);
        return () => window.removeEventListener("keydown", closeModal)
    }, [handleClose]);

    return createPortal(
        (<ModalOverlay handleClose={handleClose}>
            <div className={styles.modal_window} style={{width: props.width}}>
            <span className={"text text_type_main-medium " + styles.close} onClick={handleClose}><CloseIcon
                type="primary"/></span>
                {props.children}
            </div>
        </ModalOverlay>),
        modal
    );
};