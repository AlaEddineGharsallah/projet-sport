import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {};
  loginForm: FormGroup;
  allPlayers: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']
    })
    this.allPlayers = [
      { id: 1, name: 'Messi', email: 'aaaa@aa.com', pwd: '0000', poste: 'ATK', dateNaissance: '10-10-10', description: 'aaaaaaaa', image: 'assests/Image/bg_1.jpg' },
      { id: 2, name: 'Ala', email: 'zzzz@zz.com', pwd: '1111', poste: 'qfdc', dateNaissance: '10-10-10', description: 'aaaaaaaa', image: 'assests/Image/bg_1.jpg' },
      { id: 3, name: 'Med', email: 'eeee@ee.com', pwd: '2222', poste: 'qsr', dateNaissance: '10-10-10', description: 'aaaaaaaa', image: 'assests/Image/bg_1.jpg' },
      { id: 4, name: 'Joo', email: 'rrrr@rr.com', pwd: '3333', poste: 'ATK', dateNaissance: '10-10-10', description: 'aaaaaaaa', image: 'assests/Image/bg_1.jpg' }
    ]

  }
  Connected() {
    console.log('Here my login object', this.login)
    alert('Bouton click')
  }
conmpare(email1,email2:string, pwd1,pwd2:number){
  if(email1 === email2 && pwd1===pwd2) { return ('Joueur exisitant');}
  else {return ('false');}
}

}
