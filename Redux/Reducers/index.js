import { combineReducers } from "redux";
import Themes from "./Theme";

const allReducers = combineReducers({
    theme: Themes
})

export default allReducers