import React from 'react';
import styles from './Button.module.css'
import {motion} from "framer-motion";

interface IButton {
    children: string
    className?: string
    func?: () => void
}

const Button = ({children, className, func}: IButton) => {
    return (
        <motion.button
            onClick={func}
            className={`
            ${styles.button}
            ${className}
            `}
        >
            {children}
        </motion.button>
    );
};

export default Button;