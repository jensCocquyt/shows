import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard/dashboard.component'
import { ShowsComponent } from './shows/shows/shows.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'shows', loadChildren: 'app/shows/shows.module#ShowsModule' }
];



@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })]
})
export class AppRoutingModule {

}