import { Component } from '@angular/core';
import { Item } from '../interfaces/profiles.interfaces';
import { ProfileService } from '../services/service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  get results() {
    return this.profileService.results.slice(0,10);
  }

  changeCurrentProfile(profile:Item){
    this.profileService.changeCurrentProfile(profile);
  }

  constructor( private profileService: ProfileService ) { }


}
