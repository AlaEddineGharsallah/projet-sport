import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { ItemsComponent } from './components/items/items.component';
import { BlogComponent } from './components/blog/blog.component';
import { VideosComponent } from './components/videos/videos.component';
import { ResultsComponent } from './components/results/results.component';
import { NewsComponent } from './components/news/news.component';
import { WordCupComponent } from './components/word-cup/word-cup.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DislpayMatchComponent } from './components/dislpay-match/dislpay-match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { DisplayBlogComponent } from './components/display-blog/display-blog.component';


@NgModule({
  // l'ensemble des classes des componet, des directives et des pipes
  // les noms des classes seront ajoutés automatiquement lors de la géneration
  //des composant, des directive et des pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    ItemsComponent,
    BlogComponent,
    VideosComponent,
    ResultsComponent,
    NewsComponent,
    WordCupComponent,
    BlogPageComponent,
    MatchesComponent,
    MatchComponent,
    PlayersComponent,
    PlayerComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddBlogComponent,
    EditPlayerComponent,
    EditMatchComponent,
    DisplayPlayerComponent,
    DislpayMatchComponent,
    ReversePipe,
    DisplayUserComponent,
    EditUserComponent,
    EditBlogComponent,
    DisplayBlogComponent
  ],
  //definir des modules externes 
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
