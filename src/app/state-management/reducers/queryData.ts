import { Show } from '../../core/model/show';
import { Actions, SETQUERYDATASEARCHVALUE, SETQUERYDATAPAGE } from './../actions/queryData';
import { QueryData } from '../../core/model/queryData';

export function QueryDataReducer(state: QueryData, action: Actions) {
    switch (action.type) {
        case SETQUERYDATASEARCHVALUE:
            return Object.assign({}, state, { searchValue: action.payload, page: 1 });
        case SETQUERYDATAPAGE:
            return Object.assign({}, state, { page: action.payload });
        default:
            return state;
    }
}