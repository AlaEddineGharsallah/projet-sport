import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
player:any;
id:any;
editPlayerForm:any;
  constructor(private activatedRoute:ActivatedRoute,
    private playerService:PlayerService,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.editPlayerForm = this.formBuilder.group({
      name: [''],
      dateNaissance:[''],
      description:[''],
      poste: [''],
      poids: [''],
      image:['']
    }) 

    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      data=>{
        console.log('data from db', data);
        this.player=data;
      }
    )

  }
  validateEdit(){
    this.playerService.editPlayer(this.player).subscribe(
      ()=>{
        this.router.navigate(['admin']);
      }
    )
  }
}
