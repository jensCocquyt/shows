import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { LOADPAGEDSHOWS, LoadPagedShowsAction, LoadPagedShowsSuccesAction } from '../actions/pagedShows';
import { mergeMap, map } from 'rxjs/operators';
import { ShowsService } from '../../core/shows-service/shows.service';

@Injectable()
export class PagedShowsEffects {
    constructor(private actions$: Actions, private showsService: ShowsService) { }

    @Effect()
    shows$ = this.actions$.pipe(
        ofType<LoadPagedShowsAction>(LOADPAGEDSHOWS),
        mergeMap(action =>
            this.showsService.searchPaged(action.payload).pipe(
                map(data => new LoadPagedShowsSuccesAction(data))
            )
        )
    );

}