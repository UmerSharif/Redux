import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import logger from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";


const initialState = {}

const middleWares = [logger]

const store = createStore(
        combineReducers({
        math,user
        }),
        initialState, 
        compose(
        applyMiddleware(...middleWares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store