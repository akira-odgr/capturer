import HeaderLogoWhite from "../../assets/images/logo-white.png";
import HeaderLogoDark from "../../assets/images/logo-dark.png";

import "./Header.scss";

export const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav__header">
                    <img
                        src={HeaderLogoWhite}
                        alt="header-logo"
                        className="nav__header__logo"
                    />
                    <img
                        src={HeaderLogoDark}
                        alt="header-logo"
                        className="nav__header__logo"
                    />
                </div>
                <div className="nav__menu__btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="nav__links">
                    <ul>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
