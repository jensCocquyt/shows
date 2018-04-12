import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../core/model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  constructor() { }
  @Input() comments: Comment[];

}
