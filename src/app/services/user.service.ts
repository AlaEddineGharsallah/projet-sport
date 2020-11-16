import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl='api/allUsers';
  constructor(private httpClient:HttpClient){ }
  getAllUsers(){
    return this.httpClient.get(this.userUrl);
  }

  addUser(user:any){
    return this.httpClient.post(this.userUrl, user);
  }
  
  getUserById(id:number){
    return this.httpClient.get(`${this.userUrl}/${id}`)
    
    }

  deleteUser(id:number){
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }

  editUser(user:any){
    return this.httpClient.put(`${this.userUrl}/${user.id}`,user);
  }
}