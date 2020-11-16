import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allMatches:any;
  allPlayers:any;
  allUsers:any;
  allBlogs:any;

  constructor(
    private matchService: MatchService,
    private playerService: PlayerService,
    private router:Router,
    private userService:UserService,
    private blogService:BlogService) 
    { }
  
  ngOnInit() {    
    this.getMatches();
    this.getPlayers();
    this.getUsers();
    this.getBlogs();

  }

getMatches(){
  this.matchService.getAllMatches().subscribe(
    data=>{
      this.allMatches = data;
    }
  )
}

displayMatch(id :any){
this.router.navigate([`display-match/${id}`]);
  }

editMatch(id:any){
  this.router.navigate([`edit-match/${id}`]);

}

deleteMatch(id:number){
this.matchService.deleteMatch(id).subscribe(
                  ()=>{ this.getMatches();}
                                           )
}


//! traitement pour players
getPlayers(){
  this.playerService.getAllPlayers().subscribe(
    data=>{
      this.allPlayers = data;
    }
  )
}

displayPlayer(id:number){
this.router.navigate([`display-player/${id}`]);
}

editPlayer(id:number){
  this.router.navigate([`edit-player/${id}`]);
}

deletePlayer(id:number){
this.playerService.deletePlayer(id).subscribe(
                  ()=>{ this.getPlayers();}
                                           )
}

//! traitement pour users
getUsers(){
  this.userService.getAllUsers().subscribe(
    data=>{
      this.allUsers = data;
    }
  )
}

displayUser(id:number){
this.router.navigate([`display-user/${id}`]);
}

editUser(id:number){
  this.router.navigate([`edit-user/${id}`]);
}

deleteUser(id:number){
this.userService.deleteUser(id).subscribe(
                  ()=>{ this.getUsers();}
                                           )
}
//! traitement pour blogs
getBlogs(){
  this.blogService.getAllBlogs().subscribe(
    data=>{
      this.allBlogs = data;
    }
  )
}

displayBlog(id:number){
this.router.navigate([`display-blog/${id}`]);
}

editBlog(id:number){
  this.router.navigate([`edit-blog/${id}`]);
}

deleteBlog(id:number){
this.blogService.deleteBlog(id).subscribe(
                  ()=>{ this.getBlogs();}
                                           )
}
}
