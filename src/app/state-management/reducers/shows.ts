import { Show } from "../../core/model/show";
import { Actions, LOADSHOWSSUCCES } from "../actions/shows";


export function ShowsReducer(state: Show[], action: Actions) {
    switch (action.type) {
        case LOADSHOWSSUCCES:
            return [].concat(action.payload);
        default:
            return state;
    }
}