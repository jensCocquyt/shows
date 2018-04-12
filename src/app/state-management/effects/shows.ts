import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { LOADSHOWS, LoadShowsAction, LoadShowsSuccesAction} from '../actions/shows';
import { mergeMap, map } from 'rxjs/operators';
import { ShowsService } from '../../core/shows-service/shows.service';

@Injectable()
export class ShowsEffects {
    constructor(private actions$: Actions, private ShowsService: ShowsService) { }

    @Effect()
    shows$ = this.actions$.pipe(
        ofType<LoadShowsAction>(LOADSHOWS),
        mergeMap(action =>
            this.ShowsService.search(action.payload).pipe(
                map(data => new LoadShowsSuccesAction(data.results))
            )
        )
    )

}