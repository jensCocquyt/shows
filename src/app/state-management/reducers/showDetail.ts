import { Show } from "../../core/model/show";
import { Actions, LOADSHOWDETAILSUCCES, SAVECOMMENTSUCCES } from "../actions/showDetail";


export function ShowDetailReducer(state: Show, action: Actions) {
    switch (action.type) {
        case LOADSHOWDETAILSUCCES:
            return Object.assign({}, action.payload);
        case SAVECOMMENTSUCCES:
            state.comments.push(<any>action.payload);
            return Object.assign({}, state);
        default:
            return state;
    }
}