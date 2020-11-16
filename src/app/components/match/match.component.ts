import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() matchInput: any;

  constructor() { }

  ngOnInit() {
  }
  
  resultScore(a: number, b: number) {
    if (a > b) { return 'Win'; }
    else if (a < b) { return 'Loss'; }
    else { return 'Draw'; }
  }
  
  matchColor(ch: string) {
    switch (ch) {
      case 'Win': return 'green';
      case 'Loss': return 'red';
      case 'Draw': return 'blue';
    }
  }

}
