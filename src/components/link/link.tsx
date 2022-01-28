import React from "react";
import styles from './link.module.css'

interface ILinkProps {
    icon: React.ReactElement;
    onClick?: () => void;
    text: string
}

export const Link = (props: ILinkProps) => {
    return (<a className={styles.link} onClick={props.onClick}>{props.icon}<span
        className='text_type_main-default text_color_inactive'>{props.text}</span></a>);
};