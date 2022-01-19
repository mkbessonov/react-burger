import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useRef} from "react";
import styles from './modal.module.css'

interface IModalProps {
    children: any,
    handleClose: () => void
}

export const Modal = (props: IModalProps) => {
    const cardElementRef = useRef<HTMLDivElement>(null);
    window.onclick = function (event) {
        if (event.target === cardElementRef.current) {
            props.handleClose();
        }
    };
    return (<div className={styles.modal} ref={cardElementRef}>
        <div className={styles.modal_window}>
            <span className={"text text_type_main-medium " + styles.close} onClick={props.handleClose}><CloseIcon
                type="primary"/></span>
            <div className={styles.modal_content}>{props.children}</div>
        </div>
    </div>);
}