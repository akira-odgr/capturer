import { About } from "./components/about/About";
import { Header } from "./components/header/Header";

import "./App.scss";
import { Portfolio } from "./components/Portfolio/Portfolio";

export const App = () => {
    return (
        <>
            <Header />
            <About />
            <Portfolio />
        </>
    );
};
