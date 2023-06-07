import React from 'react';
import styles from './Button.module.css'
interface IButton {
    children: string
    className: string
}

const Button = ({children, className}: IButton) => {
    return (
        <button className={`${styles.button} ${className}`}>{children}</button>
    );
};

export default Button;