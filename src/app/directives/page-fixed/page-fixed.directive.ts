import { Directive,ElementRef } from '@angular/core';
import * as $ from "jquery";

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

@Directive({
  selector: '[appPageFixedSidebar]'
})
export class PageFixedSideBarDirective {

  constructor(public element:ElementRef) {
    let $sidebar:JQuery = $(element.nativeElement);
    window.addEventListener('scroll',()=>{
      $sidebar.stop();
      if(window.pageYOffset > 100){
        $sidebar.animate({'padding-top':$(window).scrollTop() - 100},'500');
      }else{
        $sidebar.animate({'padding-top':0},'500');
      }

    });
  }

}
