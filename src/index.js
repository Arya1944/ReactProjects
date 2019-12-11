import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

/*const element = <h1>Beatiful World</h1>;
console.log(element);*/

ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
