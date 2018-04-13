import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchComponent } from './search/search.component';
import { PagingComponent } from './paging/paging.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    SearchComponent
  ],
  declarations: [ListComponent, ListItemComponent, FavoriteComponent, SearchComponent, PagingComponent]
})
export class SharedModule { }
