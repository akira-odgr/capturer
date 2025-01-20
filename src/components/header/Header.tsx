import { useState } from "react";
import LogoWhite from "../../assets/images/logo-white.png";
import HeaderImage from "../../assets/images/header.jpg";
import "./Header.scss";

const headerBg = {
    backgroundImage: `radial-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(0, 0, 0, 0.9)
    ), url(${HeaderImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    minHeight: "600px",
};

export const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggle = () => {
        setIsActive(!isActive);
    };
    return (
        <header style={headerBg}>
            <nav className="nav">
                <div className="nav__header">
                    <div className="nav__header__logo">
                        <img src={LogoWhite} alt="header-logo" />
                    </div>
                    <div
                        className={`nav__header__btn ${
                            isActive ? "is-active" : ""
                        }`}
                        onClick={toggle}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={`nav__links ${isActive ? " is-active" : ""}`}>
                    <li>
                        <a href="#home">home</a>
                    </li>
                    <li>
                        <a href="#about">about us</a>
                    </li>
                    <li>
                        <a href="#services">services</a>
                    </li>
                    <li className="nav__links__logo">
                        <a href="#">
                            <img src={LogoWhite} alt="logo-white" />
                        </a>
                    </li>
                    <li>
                        <a href="#client">client</a>
                    </li>
                    <li>
                        <a href="#blog">blog</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
