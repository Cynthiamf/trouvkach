/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by Lionel Franco
 * started at 11/09/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import Header from "./components/header";
import Maps from "./components/map";
import Search from "./components/search";
import List from "./components/list";
import Footer from "./components/footer";

const App = () => (
    <div>
        <div className={"Header"}>
            <Header />
        </div>
        <div className={"Content"}>
            <div className={"LeftBlock"}>
                <Maps />
            </div>
            <div className={"RightBlock"}>
                <div className={"Search"}>
                    <Search />
                </div>
                <div className={"Lists"}>
                    <List />
                    <List />
                </div>
            </div>
        </div>
        <div className={"Footer"}>
            <Footer />
        </div>
    </div>
);

ReactDOM.render(<App />, document.querySelector("#app"));
