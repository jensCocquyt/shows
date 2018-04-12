import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../../core/model/show';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  public onClick(id: number) {
    this.selected.emit(id);
  }

  @Input() shows: Show[];
  @Output() selected = new EventEmitter<number>();

  ngOnInit() {

  }

}
