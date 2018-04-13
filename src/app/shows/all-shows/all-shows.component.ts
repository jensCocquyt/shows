import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShowsService } from '../../core/shows-service/shows.service';
import { map, switchMap, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { merge } from 'rxjs/observable/merge';
import { ShowsSandbox } from '../shows.sandbox';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../state-management/app-state';
import { Observable } from 'rxjs/Observable';
import { Show } from '../../core/model/show';

@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.css']
})

export class AllShowsComponent implements OnDestroy {

  pagedshows$ = this.showsSandbox.pagedShows$;
  shows$: Observable<Show[]>;
  currentPage$: Observable<number>;
  onDestroy$ = new Subject();

  constructor(
    private router: Router,
    private showsSandbox: ShowsSandbox,
    private store: Store<AppState>) {

    this.shows$ = this.pagedshows$.pipe(filter(s => !!s), map((s) => s.items));
    this.currentPage$ = this.pagedshows$.pipe(filter(s => !!s), map((s) => s.page));
  }



  onSelected(id: number) {
    this.router.navigate(['shows', id]);
  }

  onPageChange(page: number) {
    this.showsSandbox.setPage$.next(page);
  }

  onSearch(input: string) {
    this.showsSandbox.setSearchValue$.next(input);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }


}
