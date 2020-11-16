import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let allPlayers = [
      { id: 1, name: 'Messi', poste: 'ATK', dateNaissance: '10-10-10', description: 'aaaaaaaa', poids: 80, image: 'assets/images/bg_1.jpg' },
      { id: 2, name: 'Ala', poste: 'qfdc', dateNaissance: '10-10-10', description: 'aaaaaaaa', poids: 80, image: 'assets/images/bg_2.jpg' },
      { id: 3, name: 'Med', poste: 'qsr', dateNaissance: '10-10-10', description: 'aaaaaaaa', poids: 80, image: 'assets/images/bg_3.jpg' },
      { id: 4, name: 'Joo', poste: 'ATK', dateNaissance: '10-10-10', description: 'aaaaaaaa', poids: 80, image: 'assets/images/bg_3.jpg' }
    ];

    let allMatches = [
      { id: 1, match: 1, scoreOne: 3, scoreTwo: 2, teamOne: 'CA', teamTwo: 'EST', logoTeamOne: 'assets/images/imag-taraji.jpg', logoTeamTwo: 'assets/images/imag-fcb.jpg' },
      { id: 2, match: 2, scoreOne: 3, scoreTwo: 4, teamOne: 'CA', teamTwo: 'EST', logoTeamOne: 'assets/images/imag-taraji.jpg', logoTeamTwo: 'assets/images/imag-fcb.jpg' },
      { id: 3, match: 3, scoreOne: 1, scoreTwo: 5, teamOne: 'CA', teamTwo: 'EST', logoTeamOne: 'assets/images/imag-taraji.jpg', logoTeamTwo: 'assets/images/imag-fcb.jpg' },
      { id: 4, match: 4, scoreOne: 1, scoreTwo: 1, teamOne: 'CA', teamTwo: 'EST', logoTeamOne: 'assets/images/imag-taraji.jpg', logoTeamTwo: 'assets/images/imag-fcb.jpg' }
    ];

    let allUsers = [
      { id: 1, fName: 'ala', lName: 'ben ali', email: 'ala@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '55555555', description: 'jajajajajajajajajajajajajjajaj', image: 'assets/images/bg_1.jpg' },
      { id: 2, fName: 'med', lName: 'hamdi', email: 'med@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '55555555', description: 'jajajajajajajajajajajajajjajaj', image: 'assets/images/bg_1.jpg' },
      { id: 3, fName: 'mo5', lName: 'hamemi', email: 'mo5@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '55555555', description: 'jajajajajajajajajajajajajjajaj', image: 'assets/images/bg_1.jpg' },
      { id: 4, fName: 'ahmed', lName: 'marzou9', email: 'ahmed@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '55555555', description: 'jajajajajajajajajajajajajjajaj', image: 'assets/images/bg_1.jpg' }

    ];
    let allBlogs = [
      { id: 1, blogTitle: 'ala', fNameAuthor: 'paul', lNameAuthor: 'ben ali', tel: '55555555', description: 'jajajajajajajajajajajajajjajaj', image: 'assets/images/bg_1.jpg ',date:'10-10-10' },
      { id: 2, blogTitle: 'med', fNameAuthor: 'mark', lNameAuthor: 'hamdi', tel: '55555555', description: 'jajajajajajajajajajajajajjajaj', image: 'assets/images/bg_1.jpg' ,date:'10-10-10'},
      { id: 3, blogTitle: 'mo5', fNameAuthor: 'jean', lNameAuthor: 'hamemi', tel: '55555555', description: 'jajajajajajajajajajajajajjajaj', image: 'assets/images/bg_1.jpg' ,date:'10-10-10'},
      { id: 4, blogTitle: 'ahmed', fNameAuthor: 'alex', lNameAuthor: 'marzou9', tel: '55555555', description: 'jajajajajajajajajajajajajjajaj', image: 'assets/images/bg_1.jpg',date:'10-10-10'}

    ];
    return { allMatches, allPlayers, allUsers, allBlogs };

  }
}