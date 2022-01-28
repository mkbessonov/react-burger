import styles from "./modal-overlay.module.css";
import {ReactElement, useRef} from "react";

interface IModalOverlayProps {
    children: ReactElement,
    handleClose: () => void,
}

export const ModalOverlay = (props: IModalOverlayProps) => {
    const cardElementRef = useRef<HTMLDivElement>(null);
    window.onclick = function (event) {
        if (event.target === cardElementRef.current) {
            props.handleClose();
        }
    };
    return (
        <div className={styles.modal} ref={cardElementRef}>{props.children}</div>
    );
};