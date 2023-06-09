import React from 'react';
import Image from "next/image";
import logo from '../../../../public/logo.svg'
import mobileLogo from '../../../../public/mobileLogo.svg'

const Logo = () => {
    return (
        <>
            <Image className={'mobile:hidden desktop:block'} src={logo} alt={"Sadchikov Tech."}/>
            <Image className={'mobile:block desktop:hidden'} src={mobileLogo} alt={"Sadchikov Tech."}/>
        </>
    );
};

export default Logo;