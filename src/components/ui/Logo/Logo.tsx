import React from 'react';
import Image from "next/image";
import logo from '../../../../public/logo.svg'

const Logo = () => {
    return (
        <>
            <Image src={logo} alt={"Sadchikov Tech."}/>
        </>
    );
};

export default Logo;