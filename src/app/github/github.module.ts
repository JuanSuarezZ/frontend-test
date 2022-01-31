import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { ResultsComponent } from './results/results.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { GithubRoutingModule } from './github-routing.module';
import { MasterPageComponent } from './master-page/master-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SearcherComponent,
    ResultsComponent,
    ProfileDetailsComponent,
    MasterPageComponent,

  ],
  imports: [
    CommonModule,
    GithubRoutingModule
  ],
  exports:[
    MainPageComponent
  ]

})
export class GithubModule { }
