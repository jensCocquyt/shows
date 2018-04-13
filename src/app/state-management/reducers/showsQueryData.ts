import { Show } from '../../core/model/show';
import { Actions, SETSHOWSQUERYDATASEARCHVALUE, SETSHOWSQUERYDATAPAGE } from './../actions/showsQueryData';
import { QueryData } from '../../core/model/queryData';

export function ShowsQueryDataReducer(state: QueryData, action: Actions) {
    switch (action.type) {
        case SETSHOWSQUERYDATASEARCHVALUE:
            return Object.assign({}, state, { searchValue: action.payload, page: 1 });
        case SETSHOWSQUERYDATAPAGE:
            return Object.assign({}, state, { page: action.payload });
        default:
            return state;
    }
}