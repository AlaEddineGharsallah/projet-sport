import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MatchComponent } from './components/match/match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { DislpayMatchComponent } from './components/dislpay-match/dislpay-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DisplayBlogComponent } from './components/display-blog/display-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'match', component: MatchComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-match', component: AddMatchComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'add-blog', component: AddBlogComponent },
  { path: 'display-player/:id', component: DisplayPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'edit-match/:id', component: EditMatchComponent },
  { path: 'display-match/:id', component: DislpayMatchComponent },
  { path: 'display-user/:id', component: DisplayUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'display-blog/:id', component: DisplayBlogComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
