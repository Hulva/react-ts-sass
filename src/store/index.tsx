import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { systemReducer } from "./system/reducer";
import { chatReducer } from "./chat/reducers";
import { enthusiasmReducer } from "./enthusiasm/reducers";

import * as utils from "../utils";
import { notificationReducer } from "./notification/reducer";

const rootReducer = combineReducers({
    router: connectRouter(utils.history),
    system: systemReducer,
    chat: chatReducer,
    enthusiasm: enthusiasmReducer,
    notification: notificationReducer,
});

export type AppStore = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, compose(
    applyMiddleware(
        routerMiddleware(utils.history), // for dispatching history actions
        // ... other middlewares
    )
));

export default store;