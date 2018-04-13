import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { LOADSHOWDETAIL, SaveCommentAction, SAVECOMMENT, SaveCommentSuccesAction,
        LoadShowDetailAction, LoadShowDetailSuccesAction } from '../actions/showDetail';
import { mergeMap, map } from 'rxjs/operators';
import { ShowsService } from '../../core/shows-service/shows.service';

@Injectable()
export class ShowDetailEffects {
    constructor(private actions$: Actions, private showsService: ShowsService) { }

    @Effect()
    showDetail$ = this.actions$.pipe(
        ofType<LoadShowDetailAction>(LOADSHOWDETAIL),
        mergeMap(action =>
            this.showsService.getById(action.payload).pipe(
                map(data => new LoadShowDetailSuccesAction(data))
            )
        )
    );

    @Effect()
    comment$ = this.actions$.pipe(
        ofType<SaveCommentAction>(SAVECOMMENT),
        mergeMap(action =>
            this.showsService.saveComment(action.payload).pipe(
                map(data => new SaveCommentSuccesAction(data))
            )
        )
    );

}