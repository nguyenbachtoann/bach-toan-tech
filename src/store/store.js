import {createStore} from "redux";
import reducer from "./reducers/reducer";

const inittialState = {
    text: "initialState"
}

export const store = createStore(reducer, inittialState);