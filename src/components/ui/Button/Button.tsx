import React from 'react';
import styles from './Button.module.css'
interface IButton {
    children: string
    className?: string
    func?: () => void
}

const Button = ({children, className, func}: IButton) => {
    return (
        <button onClick={func} className={`${styles.button} ${className}`}>{children}</button>
    );
};

export default Button;