import React from 'react';
import styles from './Button.module.css'
interface IButton {
    children: string
}

const Button = ({children}: IButton) => {
    return (
        <button className={`${styles.button}`}>{children}</button>
    );
};

export default Button;