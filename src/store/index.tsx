import { combineReducers } from "redux";
import { systemReducer } from "./system/reducer";
import { chatReducer } from "./chat/reducers";

const rootReducer = combineReducers({
    system: systemReducer,
    chat: chatReducer,
    hello: helloReducer,
});

export type AppStore = ReturnType<typeof rootReducer>;