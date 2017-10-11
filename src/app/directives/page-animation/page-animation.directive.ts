import { Directive,ElementRef,OnInit,OnDestroy } from '@angular/core';
import { PageEventService } from '../../services/page-event/page-event.service'
import { Subscription } from 'rxjs/Subscription';
import * as $ from "jquery";

@Directive({
  selector: '[appPageAnimation]'
})
export class PageAnimationDirective implements OnInit,OnDestroy {
  private subscription: Subscription;

  constructor(public element:ElementRef,public pageEvent:PageEventService) {
    let elem = this.element.nativeElement as Element;
    const classList:DOMTokenList = elem.classList;
    classList.add("animated");
    $("html,body").animate({scrollTop:0},'500');
  }

  ngOnInit() {
    this.subscription = this.pageEvent.stateData.subscribe((className:string)=>{
      let elem = this.element.nativeElement as Element;
      const classList:DOMTokenList = elem.classList;
      if(className != ""){
        classList.add(className);
      }
    });
    this.pageEvent.sendEventData("ok");
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
