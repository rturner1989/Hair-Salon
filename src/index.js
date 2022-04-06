import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        {/* <BrowserRouter basename="/Hair-Salon"> */}
        <HashRouter>
            <App />
        </HashRouter>
        {/* </BrowserRouter> */}
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals(console.log);
