import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl='api/allPlayers';
  constructor(private httpClient:HttpClient){ }
  getAllPlayers(){
    return this.httpClient.get(this.playerUrl);
  }

  addPlayer(player:any){
    return this.httpClient.post(this.playerUrl, player);
  }
  
  getPlayerById(id:number){
    return this.httpClient.get(`${this.playerUrl}/${id}`)
    
    }

  deletePlayer(id:number){
    return this.httpClient.delete(`${this.playerUrl}/${id}`);
  }

  editPlayer(player:any){
    return this.httpClient.put(`${this.playerUrl}/${player.id}`,player);
  }
}
