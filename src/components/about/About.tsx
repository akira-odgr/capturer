import { FC } from "react";
import { motion } from "framer-motion";
import LogoDark from "../../assets/images/logo-dark.png";

import "./About.scss";

export const About: FC = () => {
    return (
        <section className="about__container">
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
                viewport={{ once: true }}
                className="about__title"
            >
                we capture the moments
            </motion.h2>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="about__description"
            >
                キャプチャーでは、大切な一瞬一瞬を逃さないようあなたにとってかけがえの瞬間を写真への情熱と何気ない瞬間を特別な思い出に変えます。特別な思い出に変えます。
            </motion.p>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0 }}
                viewport={{ once: true }}
                className="about__description"
            >
                節目となるイベントでも、率直なポートレートでも、息をのむような自然の美しさでも。その一瞬一瞬のエッセンスを逃すことなく写真に収めます、お客様の大切な思い出が一生のものとなることをお約束します。私たちにお任せくださいあなたの人生の旅路の魔法を、一度に一枚のフレームに収めます。
            </motion.p>
            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
                src={LogoDark}
                alt="logo"
                className="about__logo"
            />
        </section>
    );
};
