import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  addPlayerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    this.addPlayerForm = this.formBuilder.group({
      name: ['', Validators.minLength(5)],
      dateNaissance:[''],
      description:[''],
      poste: [''],
      poids: ['', [Validators.minLength(2), Validators.maxLength(2)]],
      image:['']
    })
  }

  addPlayer(player: any) {
    console.log('This is the player', player);
    this.playerService.addPlayer(player).subscribe(
      () => {
        console.log('Player added successfully');
        this.router.navigate(['players']);
      }
    )
  }
}
