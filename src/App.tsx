import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Service } from "./components/service/Service";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Client } from "./components/client/Client";

import "./App.scss";

export const App = () => {
    return (
        <>
            <Header />
            <About />
            <Portfolio />
            <Service />
            <Client />
        </>
    );
};
