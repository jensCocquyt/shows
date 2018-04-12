import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ShowsReducer } from './state-management/reducers/shows';
import { SearchReducer } from './state-management/reducers/search';
import { EffectsModule } from '@ngrx/effects';
import { ShowDetailEffects } from './state-management/effects/showDetail';
import { ShowsEffects} from './state-management/effects/shows';
import { ShowDetailReducer } from './state-management/reducers/showDetail';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    DashboardModule,
    StoreModule.forRoot({ shows: ShowsReducer, showDetail: ShowDetailReducer, searchValue: SearchReducer }),
    EffectsModule.forRoot([ShowsEffects, ShowDetailEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
