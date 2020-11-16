import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-dislpay-match',
  templateUrl: './dislpay-match.component.html',
  styleUrls: ['./dislpay-match.component.css']
})
export class DislpayMatchComponent implements OnInit {
  match: any;
  id: any;
  constructor(private activatedRoute: ActivatedRoute,
    private matchService: MatchService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        console.log('data', data);
        this.match = data;
      }
    )
  }

}
