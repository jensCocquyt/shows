import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap, takeUntil } from 'rxjs/operators';
import { ShowsService } from '../../core/shows-service/shows.service';
import { ShowsSandbox } from '../shows.sandbox';
import { Show } from '../../core/model/show';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Comment } from '../../core/model/comment';
import { Store } from '@ngrx/store';
import { LoadShowDetailAction } from '../../state-management/actions/showDetail';
import { AppState } from '../../state-management/app-state';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit, OnDestroy {


  constructor(
    private route: ActivatedRoute,
    private showsService: ShowsService,
    private showsSandbox: ShowsSandbox,
    private store: Store<AppState>) { }

  currentShowId$: Observable<string>;

  show$ = this.showsSandbox.show$;
  comments$: Observable<Comment[]>;

  onDestroy$ = new Subject();

  onCommentSubmit(comment: Comment) {
    this.showsSandbox.saveComment(comment);
  }

  ngOnInit() {
    this.currentShowId$ = this.route.params.pipe(map(p => p.id));

    this.currentShowId$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((id) => this.showsSandbox.getById(id));

    this.comments$ = this.show$.pipe(map((s) => s ? s.comments : []));

  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }


}
