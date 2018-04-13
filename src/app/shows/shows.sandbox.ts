import { Injectable } from '@angular/core';
import { ShowsService } from '../core/shows-service/shows.service';
import { switchMap, map, mergeMap, startWith, filter } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Show } from '../core/model/show';
import { Subject } from 'rxjs/Subject';
import { AppState } from '../state-management/app-state';
import { select, Store } from '@ngrx/store';
import { LoadShowsAction } from '../state-management/actions/shows';
import { SaveCommentAction, LoadShowDetailAction } from '../state-management/actions/showDetail';
import { SetSearchValueAction } from '../state-management/actions/search';


import { Comment } from '../core/model/comment';

@Injectable()
export class ShowsSandbox {

    shows$ = this.store.pipe(select(s => s.shows));
    show$ = this.store.pipe(select(s => s.showDetail));
    searchQuery = new Subject<string>();

    constructor(private showsService: ShowsService, private store: Store<AppState>) {

        this.searchQuery.subscribe(s => this.store.dispatch(new SetSearchValueAction(s)));

        this.store.pipe(
            select(s => s.searchValue),
            filter(s => s !== undefined)
        ).subscribe(s => this.store.dispatch(new LoadShowsAction(s)));
    }

    public getById(id) {
         this.store.dispatch(new LoadShowDetailAction(parseInt(id)));
    }

    public saveComment(comment: Comment) {
        this.store.dispatch(new SaveCommentAction(comment));
    }
}