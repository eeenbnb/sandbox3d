import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PaperScope, Project, Path, Point,view,Symbol } from 'paper';

@Component({
  selector: 'app-top-area',
  templateUrl: './top-area.component.html',
  styleUrls: ['./top-area.component.css']
})
export class TopAreaComponent implements OnInit {

  @ViewChild('canvas') canvasElement: ElementRef;
  scope: PaperScope;
  project: Project;


  constructor() {
  }

  ngOnInit() {
    this.scope = new PaperScope();
    this.project = new Project(this.canvasElement.nativeElement);
    let canvas = (this.canvasElement.nativeElement as Element);
    var pathArray = [];
    for(var i=0;i<50;i++){
      let radius = Math.random() * 35;
      const path = new Path.Circle({
        center: [Math.random() * canvas.scrollWidth, Math.random() * canvas.scrollHeight],
        radius: radius,
        fillColor: '#'+Math.floor(Math.random()*16777215).toString(16)
      });
      pathArray.push(path);
      this.project.activeLayer.addChild(path);
    }
    setInterval(()=>{
      for(var i=0;i<50;i++){
        if(canvas.scrollHeight + 35 < pathArray[i].position.y){
          pathArray[i].position.x = Math.random() * canvas.scrollWidth;
          pathArray[i].position.y = -35;
        }
        pathArray[i].position.y += 0.5;
      }
    },1);

  }

}
