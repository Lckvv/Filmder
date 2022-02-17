import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../molecules/logo/Logo";

const Header = () => {
    return (
        <header className={"relative w-full py-4 px-20 border-b-4 border-blue-900"}>
            <Link to={"/"}>
                <Logo/>
            </Link>
        </header>
    );
};

export default Header;
