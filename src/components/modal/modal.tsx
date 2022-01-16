import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useRef} from "react";
import './modal.css'

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
    return (<div className="modal" ref={cardElementRef}>
        <div className="modal-window">
            <span className="text text_type_main-medium close" onClick={props.handleClose}><CloseIcon
                type="primary"/></span>
            <div className='modal-content'>{props.children}</div>
        </div>
    </div>);
}