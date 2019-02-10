import { Component, OnInit } from '@angular/core';
import { PageEventService } from '../../services/page-event/page-event.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  beforeIndex:number = 0;
  animeState:string = "";
  pages:any =[
    {
      link:"./",
      name:"Top"
    },
    {
      link:"./3dview",
      name:"3D/fps"
    },
    {
      link:"./pinball",
      name:"3D/pinball"
    },
    {
      link:"./posteffect",
      name:"3D/posteffect"
    },
    {
      link:"./movie1",
      name:"3D/movie1"
    },
  ]


  constructor(public pageEvent:PageEventService) {}

  ngOnInit() {
    this.pageEvent.eventData.subscribe(()=>{
      this.pageEvent.sendStateData(this.animeState);
    })
  }

  clickLink(index:number){
    if(index < this.beforeIndex){
      this.animeState = "slideInDown";
    }else{
      this.animeState = "slideInUp";
    }
    this.beforeIndex = index;
  }

}
