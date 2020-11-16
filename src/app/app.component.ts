import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-tes-angular';

  maxtable(T: any) {
    let max = T[0];
    for (let i = 1; i < T.length; i++) {
      if (max < T[i]) {
        max = T[i];
      }
    }
    return max;
  }
  
}

