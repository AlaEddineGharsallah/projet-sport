import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  allPlayers: any;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.allPlayers = data;
      }
    )
  }

  display(obj: any, x: string) {
    return obj.poste === x;
  }

}
