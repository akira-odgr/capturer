import {
    RiFacebookBoxFill,
    RiInstagramLine,
    RiTwitterXFill,
    RiYoutubeFill,
    RiPinterestFill,
} from "react-icons/ri";
import FooterImg from "../../assets/images/logo-dark.png";

import "./Footer.scss";
import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__col">
                    <div className="footer__col__image">
                        <img src={FooterImg} alt="logo" />
                    </div>
                    <div className="footer__col__socials">
                        <a href="#">
                            <RiFacebookBoxFill />
                        </a>
                        <a href="#">
                            <RiInstagramLine />
                        </a>
                        <a href="#">
                            <RiTwitterXFill />
                        </a>
                        <a href="#">
                            <RiYoutubeFill />
                        </a>
                        <a href="#">
                            <RiPinterestFill />
                        </a>
                    </div>
                </div>

                <div className="footer__col">
                    <ul className="footer__col__links">
                        <li>
                            <a href="#home">home</a>
                        </li>
                        <li>
                            <a href="#about">about</a>
                        </li>
                        <li>
                            <a href="#services">services</a>
                        </li>
                        <li>
                            <a href="#client">client</a>
                        </li>
                        <li>
                            <a href="#blog">blog</a>
                        </li>
                        <li>
                            <a href="#contact">contact us</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>stay in touch</h4>
                    <p>
                        Capturerの最新情報をお届けします！コミュニティに参加して
                        この瞬間を見逃すことはありません！
                    </p>
                </div>
            </div>

            <div className="footer__bar">
                Copyright &copy; 2025 odgr-show. All rights reserved.
            </div>
        </footer>
    );
};
