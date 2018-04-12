import { Action } from "@ngrx/store";
import { Show } from "../../core/model/show";
import { Comment } from "../../core/model/comment";

export const SETSEARCHVALUE = 'SETSEARCHVALUE';

export class SetSearchValueAction implements Action {
    type: string = SETSEARCHVALUE;
    payload: string;

    constructor(searchValue: string) {
        this.payload = searchValue;
    }
}

export type Actions = SetSearchValueAction;
