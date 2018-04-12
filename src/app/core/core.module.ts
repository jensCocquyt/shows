import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ShowsService } from './shows-service/shows.service';
import { CustomDatePipe } from './pipe/custom-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CustomDatePipe],
  exports: [CustomDatePipe]
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ShowsService]
    };
  }
}
