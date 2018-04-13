import { Action } from '@ngrx/store';
import { Show } from '../../core/model/show';
import { Comment } from '../../core/model/comment';
import { PagedList } from '../../core/model/pagedList';
import { QueryData } from '../../core/model/queryData';

export const LOADPAGEDSHOWS = 'LOADPAGEDSHOWS';
export const LOADPAGEDSHOWSSUCCES = 'LOADPAGEDSHOWSSUCCES';

export class LoadPagedShowsSuccesAction implements Action {
    type: string = LOADPAGEDSHOWSSUCCES;
    payload: PagedList<Show>;

    constructor(shows: PagedList<Show>) {
        this.payload = shows;
    }
}

export class LoadPagedShowsAction implements Action {
    type: string = LOADPAGEDSHOWS;
    payload: QueryData;

    constructor(queryData: QueryData) {
        this.payload = queryData;
    }
}

export type Actions = LoadPagedShowsSuccesAction | LoadPagedShowsAction;