import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Profiles,Item } from '../interfaces/profiles.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private serviceURL: string = 'https://api.github.com/search/users';

  public results: Item[] = [];
  public currentProfile: Item = {
    "login": "JuanSuarezZ",
    "id": 73491336,
    "node_id": "MDQ6VXNlcjczNDkxMzM2",
    "avatar_url": "https://avatars.githubusercontent.com/u/73491336?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/JuanSuarezZ",
    "html_url": "https://github.com/JuanSuarezZ",
    "followers_url": "https://api.github.com/users/JuanSuarezZ/followers",
    "following_url": "https://api.github.com/users/JuanSuarezZ/following{/other_user}",
    "gists_url": "https://api.github.com/users/JuanSuarezZ/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/JuanSuarezZ/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/JuanSuarezZ/subscriptions",
    "organizations_url": "https://api.github.com/users/JuanSuarezZ/orgs",
    "repos_url": "https://api.github.com/users/JuanSuarezZ/repos",
    "events_url": "https://api.github.com/users/JuanSuarezZ/events{/privacy}",
    "received_events_url": "https://api.github.com/users/JuanSuarezZ/received_events",
    "type": "User",
    "site_admin": false,
    "score": 1.0
  };


  changeCurrentProfile( profile:Item ){
    this.currentProfile = {...profile};
  }


  constructor( private http: HttpClient ) {
    this.searchProfiles('JuanSuarezZ');
  }

  searchProfiles( query: string = '' ) {

    const params = new HttpParams()
          .set('q', query );

    this.http.get<Profiles>(`${ this.serviceURL }`, { params } )
      .subscribe( ( resp ) => {
        this.results = resp.items;
      },
    );
    this.results = this.results.splice(0,10);
    for (let i = 0; i < this.results.length; i++) {

      if(this.results[i].score > 30){
        const index = this.results.indexOf(this.results[i]);
        if (index > -1) {
          this.results.splice(index, 1);
        }
      }
    }
  }
}
