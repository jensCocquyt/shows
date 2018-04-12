import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../core/shows-service/shows.service';
import { map, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { merge } from 'rxjs/observable/merge';
import { ShowsSandbox } from '../shows.sandbox';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../state-management/app-state';
import { LoadShowsAction } from '../../state-management/actions/shows';

@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.css']
})
export class AllShowsComponent {

  constructor(private router: Router, private showsSandbox: ShowsSandbox, private store: Store<AppState>) {
    this.store.dispatch(new LoadShowsAction());
  }

  shows$ = this.showsSandbox.shows$;

  onSelected(id: number) {
    this.router.navigate(['shows', id])
  }

  onSearch(input: string) {
    this.showsSandbox.searchQuery.next(input);
  }

}
