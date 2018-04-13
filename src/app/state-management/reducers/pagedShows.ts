import { Show } from '../../core/model/show';
import { Actions, LOADPAGEDSHOWSSUCCES } from '../actions/pagedShows';
import { PagedList } from '../../core/model/pagedList';


export function PagedShowsReducer(state: PagedList<Show>, action: Actions) {
    switch (action.type) {
        case LOADPAGEDSHOWSSUCCES:
            return action.payload;
        default:
            return state;
    }
}