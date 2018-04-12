import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  constructor() { }

  @Output() onSearch = new EventEmitter<string>();

  searchValue$ = new Subject<string>();
  onDestroy$ = new Subject();

  public onInputChange(input: string) {
    this.searchValue$.next(input);
  }

  ngOnInit() {
    this.searchValue$
      .pipe(
        takeUntil(this.onDestroy$),
        debounceTime(300),
        map( s => s.trim()),
        distinctUntilChanged())
      .subscribe(s => this.onSearch.emit(s));
  }

  ngOnDestroy(){
    this.onDestroy$.next();
  }
  
}
