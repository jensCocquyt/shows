import { Show } from '../../core/model/show';
import { Actions, SETSEARCHVALUE } from './../actions/search';

export function SearchReducer(state: Show[], action: Actions) {
    switch (action.type) {
        case SETSEARCHVALUE:
            return action.payload;
        default:
            return state;
    }
}