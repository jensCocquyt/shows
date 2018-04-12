import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AllShowsComponent } from "./all-shows/all-shows.component";
import { ShowDetailComponent } from "./show-detail/show-detail.component";
import { ShowsComponent } from "./shows/shows.component";

const routes: Routes = [
    {
        path: '',
        component: ShowsComponent,
        children: [
            { path: '', component: AllShowsComponent },
            { path: ':id', component: ShowDetailComponent }
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ShowsRoutingModule {

}