import { Action } from '@ngrx/store';
import { Show } from '../../core/model/show';
import { Comment } from '../../core/model/comment';

export const SETQUERYDATASEARCHVALUE = 'SETQUERYDATASEARCHVALUE';
export const SETQUERYDATAPAGE = 'SETQUERYDATAPAGE';

export class SetQueryDataSearchValueAction implements Action {
    type: string = SETQUERYDATASEARCHVALUE;
    payload: string;

    constructor(searchValue: string) {
        this.payload = searchValue;
    }
}

export class SetQueryDataSearchPage implements Action {
    type: string = SETQUERYDATAPAGE;
    payload: number;

    constructor(page: number) {
        this.payload = page;
    }
}

export type Actions = SetQueryDataSearchValueAction | SetQueryDataSearchPage;
