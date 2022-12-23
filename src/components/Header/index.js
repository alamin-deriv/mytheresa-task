import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <header className="header">
                <div className="header__content">
                    <Link to="/" className="header__content__logo">
                        MYTHERESA<span>.mov</span>
                    </Link>
                </div>
            </header>
    );
}

export default Header