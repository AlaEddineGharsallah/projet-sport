import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //!definir addresse
 matchUrl='api/allMatches';
  constructor(private httpClient:HttpClient) { }

  getAllMatches(){
    return this.httpClient.get(this.matchUrl);
  }

  addMatch(match:any){
    return this.httpClient.post(this.matchUrl, match);
  }
  
  getMatchById(id:number){
    return this.httpClient.get(`${this.matchUrl}/${id}`)
    
    }

  deleteMatch(id:number){
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
  editMatch(match:any){
    return this.httpClient.put(`${this.matchUrl}/${match.id}`,match);
  }
}
