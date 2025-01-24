import { FC, useState } from "react";
import LogoWhite from "../../assets/images/logo-white.png";
import "./Header.scss";

export const Header: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggle = (): void => {
        // isActiveの状態を反転させる関数
        setIsActive(!isActive);
    };

    return (
        <header>
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
