import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../../core/model/show';

@Component({
  selector: 'app-show-detail-info',
  templateUrl: './show-detail-info.component.html',
  styleUrls: ['./show-detail-info.component.css']
})
export class ShowDetailInfoComponent implements OnInit {

  constructor() { }

  @Input() show: Show;

  ngOnInit() {
  }

}
