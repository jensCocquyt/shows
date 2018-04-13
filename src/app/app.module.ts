import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SearchReducer } from './state-management/reducers/search';
import { EffectsModule } from '@ngrx/effects';
import { ShowDetailEffects } from './state-management/effects/showDetail';
import { ShowDetailReducer } from './state-management/reducers/showDetail';
import { PagedShowsReducer } from './state-management/reducers/pagedShows';
import { QueryDataReducer } from './state-management/reducers/queryData';
import { PagedShowsEffects } from './state-management/effects/pagedShows';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    NgbModule.forRoot(),
    DashboardModule,
    StoreModule.forRoot({
      showDetail: ShowDetailReducer,
      searchValue: SearchReducer,
      queryData: QueryDataReducer,
      pagedShows: PagedShowsReducer
    }),
    EffectsModule.forRoot([ShowDetailEffects, PagedShowsEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
