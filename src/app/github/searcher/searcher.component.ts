import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProfileService } from '../services/service.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent {

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  constructor( private profileService: ProfileService ) { }

  search() {

    const value = this.txtSearch.nativeElement.value;

    if ( value.trim().length < 4 ) {
      return;
    }

    if ( value.trim() === 'doublevpartners' ) {
      this.txtSearch.nativeElement.value = '';
      return;
    }

    this.profileService.searchProfiles( value );

    this.txtSearch.nativeElement.value = '';
  }

}
