import { Show } from '../../core/model/show';
import { Actions, SETSHOWSQUERYDATASEARCHVALUE, SETSHOWSQUERYDATAPAGE } from './../actions/showsQueryData';
import { QueryData } from '../../core/model/queryData';

export const SETQUERYDATASEARCHVALUE = 'SETQUERYDATASEARCHVALUE';
export const SETQUERYDATAPAGE = 'SETQUERYDATAPAGE';

export function QueryDataReducer(actionNameMapping) {
    return (state: QueryData, action: Actions) => {
        const mappedaction = actionNameMapping[action.type];
        switch (mappedaction) {
            case SETQUERYDATASEARCHVALUE:
                return Object.assign({}, state, { searchValue: action.payload, page: 1 });
            case SETQUERYDATAPAGE:
                return Object.assign({}, state, { page: action.payload });
            default:
                return state;
        }
    };
}