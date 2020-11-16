import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: any): any {
    let ch1='';
        for (let i = 0; i < ch.length; i++) {
            ch1+=ch[i]+ch1;          
        }
    return ch1;
  }

}
