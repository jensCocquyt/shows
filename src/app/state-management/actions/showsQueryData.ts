import { Action } from '@ngrx/store';
import { Show } from '../../core/model/show';
import { Comment } from '../../core/model/comment';

export const SETSHOWSQUERYDATASEARCHVALUE = 'SETSHOWSQUERYDATASEARCHVALUE';
export const SETSHOWSQUERYDATAPAGE = 'SETSHOWSQUERYDATAPAGE';

export class SetQueryDataSearchValueAction implements Action {
    type: string = SETSHOWSQUERYDATASEARCHVALUE;
    payload: string;

    constructor(searchValue: string) {
        this.payload = searchValue;
    }
}

export class SetQueryDataSearchPageAction implements Action {
    type: string = SETSHOWSQUERYDATAPAGE;
    payload: number;

    constructor(page: number) {
        this.payload = page;
    }
}

export type Actions = SetQueryDataSearchValueAction | SetQueryDataSearchPageAction;
