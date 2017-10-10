import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appPageFixed]'
})
export class PageFixedDirective {

  constructor(public element:ElementRef) {
    window.addEventListener('scroll',()=>{
      let elem:any = (element.nativeElement as Element);
      if(window.pageYOffset > 100){
        elem.classList.add('fixed');
      }else{
        elem.classList.remove('fixed');
      }
    });
  }

}
