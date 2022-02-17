import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../molecules/logo/Logo";

const Footer = () => {
    return (
        <footer className={"relative w-full p-20 border-t-4 border-blue-900"}>
            <Link to={"/"}>
                <Logo/>
            </Link>
        </footer>
    );
};

export default Footer;