import {combineReducers} from "redux";
import {home} from "./homeReducers";

const rootReducer = combineReducers({
    home: home as any
});

export default rootReducer;