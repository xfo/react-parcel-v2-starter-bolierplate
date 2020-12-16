import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { APP_CONTAINER_ID } from "./utils/constants";

ReactDOM.render(<App />, document.getElementById(APP_CONTAINER_ID));