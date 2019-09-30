import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware} from "redux";
import "./index.css";
import App from "./components/App";
import { smurfReducer} from "./smurfReducer/smurfReducer";

const store = createStore(smurfReducer, applyMiddleware(thunk, logger));

ReactDOM.render (
<Provider store ={store}>
    <App />, 
    </Provider>,
    document.getElementById("root"));
