import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Comment } from '../../../core/model/comment';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent {
  form: FormGroup;

  @Input() showId: string;
  @Output() onCommentSubmit = new EventEmitter<Comment>();


  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      subject: ['', [Validators.required, Validators.maxLength(30)]],
      message: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if(this.form.valid){
      this.onCommentSubmit.emit({
        message: this.form.value.message,
        subject: this.form.value.subject,
        createdOn: new Date(),
        showId: this.showId
      });
    }
    

  }

}
