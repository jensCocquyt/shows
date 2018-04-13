import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { CommentsComponent } from './show-detail/comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { ShowsSandbox } from './shows.sandbox';
import { ShowDetailInfoComponent } from './show-detail/show-detail-info/show-detail-info.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowsRoutingModule } from './shows.routing';
import { CoreModule } from '../core/core.module';
import { CreateCommentComponent } from './show-detail/create-comment/create-comment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NgbModule,
    ReactiveFormsModule,
    CoreModule,
    CommonModule,
    SharedModule,
    ShowsRoutingModule,
  ],
  providers: [
    ShowsSandbox
  ],
  declarations: [AllShowsComponent, ShowDetailComponent, CommentsComponent, ShowDetailInfoComponent, ShowsComponent, CreateCommentComponent]
})
export class ShowsModule { }
