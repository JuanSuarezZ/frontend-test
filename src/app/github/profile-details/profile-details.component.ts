import { Component } from '@angular/core';
import { ProfileService } from '../services/service.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html'
})
export class ProfileDetailsComponent  {

  constructor( private profileService: ProfileService ) { }


  get currentProfile(){
    return this.profileService.currentProfile;
  }

}
