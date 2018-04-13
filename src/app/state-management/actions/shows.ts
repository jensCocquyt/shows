import { Action } from '@ngrx/store';
import { Show } from '../../core/model/show';
import { Comment } from '../../core/model/comment';

export const LOADSHOWS = 'LOADSHOWS';
export const LOADSHOWSSUCCES = 'LOADSHOWSSUCCES';

export class LoadShowsSuccesAction implements Action {
    type: string = LOADSHOWSSUCCES;
    payload: Show[];

    constructor(shows: Show[]) {
        this.payload = shows;
    }
}

export class LoadShowsAction implements Action {
    type: string = LOADSHOWS;
    payload: string;

    constructor(searchValue: string = '') {
        this.payload = searchValue;
    }
}

export type Actions = LoadShowsSuccesAction | LoadShowsAction;