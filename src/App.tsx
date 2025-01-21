import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Service } from "./components/service/Service";
import { Client } from "./components/client/Client";

import "./App.scss";
import { Portfolio } from "./components/portfolio/Portfolio";

export const App = () => {
    return (
        <>
            <Header />
            <About />
            <Service />
            <Portfolio />
            <Client />
        </>
    );
};
