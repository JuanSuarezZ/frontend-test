import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';



const rutas: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: 'details', component: ProfileDetailsComponent },
      { path: '**', component: MainPageComponent },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class GithubRoutingModule { }
