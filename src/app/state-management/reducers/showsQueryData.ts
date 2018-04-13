import { Show } from '../../core/model/show';
import { Actions, SETSHOWSQUERYDATASEARCHVALUE, SETSHOWSQUERYDATAPAGE } from './../actions/showsQueryData';
import { QueryData } from '../../core/model/queryData';
import { QueryDataReducer, SETQUERYDATASEARCHVALUE, SETQUERYDATAPAGE } from './queryData';

export const ShowsQueryDataActionMappings = {
    SETSHOWSQUERYDATASEARCHVALUE: SETQUERYDATASEARCHVALUE,
    SETSHOWSQUERYDATAPAGE: SETQUERYDATAPAGE
};