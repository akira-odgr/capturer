import { FC } from "react";
import LogoDark from "../../assets/images/logo-dark.png";

import "./About.scss";

export const About: FC = () => {
    return (
        <section className="about__container">
            <h2 className="about__title">we capture the moments</h2>
            <p className="about__description">
                キャプチャーでは、大切な一瞬一瞬を逃さないようあなたにとってかけがえの瞬間を写真への情熱と何気ない瞬間を特別な思い出に変えます。特別な思い出に変えます。
            </p>
            <p className="about__description">
                節目となるイベントでも、率直なポートレートでも、息をのむような自然の美しさでも。その一瞬一瞬のエッセンスを逃すことなく写真に収めます、お客様の大切な思い出が一生のものとなることをお約束します。私たちにお任せくださいあなたの人生の旅路の魔法を、一度に一枚のフレームに収めます。
            </p>
            <img src={LogoDark} alt="logo" className="about__logo" />
        </section>
    );
};
