import { Action } from "@ngrx/store";
import { Show } from "../../core/model/show";
import { Comment } from "../../core/model/comment";

export const LOADSHOWDETAIL = 'LOADSHOWDETAIL';
export const LOADSHOWDETAILSUCCES = 'LOADSHOWSDETAILSUCCES';
export const SAVECOMMENT = 'SAVECOMMENT';
export const SAVECOMMENTSUCCES = 'SAVECOMMENTSUCCES';

export class LoadShowDetailAction implements Action {
    type: string = LOADSHOWDETAIL;
    payload: number;

    constructor(id: number) {
        this.payload = id;
    }
}

export class LoadShowDetailSuccesAction implements Action {
    type: string = LOADSHOWDETAILSUCCES;
    payload: Show;

    constructor(show: Show) {
        this.payload = show;
    }
}

export class SaveCommentAction implements Action {
    type: string = SAVECOMMENT;
    payload: Comment;

    constructor(comment: Comment) {
        this.payload = comment;
    }
}

export class SaveCommentSuccesAction implements Action {
    type: string = SAVECOMMENTSUCCES;
    payload: Comment;

    constructor(comment: Comment) {
        this.payload = comment;
    }
}

export type Actions = SaveCommentSuccesAction;