import { Injectable, OnDestroy } from '@angular/core';
import { ShowsService } from '../core/shows-service/shows.service';
import { switchMap, map, mergeMap, startWith, filter, takeUntil } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { Observable } from 'rxjs/observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Show } from '../core/model/show';
import { Subject } from 'rxjs/Subject';
import { AppState } from '../state-management/app-state';
import { select, Store } from '@ngrx/store';
import { SaveCommentAction, LoadShowDetailAction } from '../state-management/actions/showDetail';
import { SetSearchValueAction } from '../state-management/actions/search';


import { Comment } from '../core/model/comment';
import { SetQueryDataSearchPageAction, SetQueryDataSearchValueAction } from '../state-management/actions/showsQueryData';
import { LoadPagedShowsAction } from '../state-management/actions/pagedShows';

@Injectable()
export class ShowsSandbox implements OnDestroy {

    shows$ = this.store.pipe(select(s => s.shows));
    pagedShows$ = this.store.pipe(select(s => s.pagedShows));
    queryData$ = this.store.pipe(select(s => s.showsQueryData));
    show$ = this.store.pipe(select(s => s.showDetail));
    setSearchValue$ = new Subject<string>();
    setPage$ = new Subject<number>();
    onDestroy$ = new Subject();

    constructor(private showsService: ShowsService, private store: Store<AppState>) {

        this.setSearchValue$
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(s => this.store.dispatch(new SetQueryDataSearchValueAction(s)));

        this.setPage$
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(p => this.store.dispatch(new SetQueryDataSearchPageAction(p)));

        this.store.pipe(
            takeUntil(this.onDestroy$),
            select(s => s.showsQueryData),
            filter(s => !!s)
        ).subscribe((s) => this.store.dispatch(new LoadPagedShowsAction(s)));

        this.setPage$.next(1);

    }

    public getById(id) {
        this.store.dispatch(new LoadShowDetailAction(parseInt(id)));
    }

    public saveComment(comment: Comment) {
        this.store.dispatch(new SaveCommentAction(comment));
    }

    ngOnDestroy() {
        this.onDestroy$.next();
    }

}