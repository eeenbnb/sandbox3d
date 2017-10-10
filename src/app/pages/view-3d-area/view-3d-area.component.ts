import { Component, OnInit,OnDestroy,ViewChild,ElementRef } from '@angular/core';
import * as THREE from 'three';
declare function require(x: string): any;
(window as any).THREE = THREE;
require('../../../../node_modules/three/examples/js/controls/PointerLockControls');

@Component({
  selector: 'app-view-3d-area',
  templateUrl: './view-3d-area.component.html',
  styleUrls: ['./view-3d-area.component.css']
})
export class View3dAreaComponent implements OnInit,OnDestroy {
  @ViewChild('canvasArea') canvasArea:ElementRef;
  canvasAreaElement:Element;
  animationFrame;

  constructor() {
  }

  ngOnInit() {
    this.canvasAreaElement = this.canvasArea.nativeElement as Element;
    let rendererSize = this.canvasAreaElement.scrollWidth;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( rendererSize, rendererSize );
    this.canvasAreaElement.appendChild(renderer.domElement);
    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );
    scene.add( new THREE.GridHelper( 1000, 1000 ) );
    scene.add( new THREE.AxisHelper(20) );
    //camera
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 100000);
    camera.position.set(0, 1.7, -1.5);
    camera.lookAt(new THREE.Vector3(0,1.7,0));
    scene.add(camera);
    //light
    scene.add( new THREE.AmbientLight( 0xF0F0F0 ) );

    const controls = new (window as any).THREE.PointerLockControls(camera);
    scene.add( controls.getObject() );

    const tick = (): void => {
      this.animationFrame = requestAnimationFrame(tick);
      renderer.render(scene, camera);
    };
    tick();

    this.canvasAreaElement.addEventListener( 'click', (event)=>{
      const element:Element = this.canvasAreaElement;
      element.requestPointerLock = element.requestPointerLock;
		  element.requestPointerLock();
    }, false );
    document.addEventListener( 'pointerlockchange', (e)=>{
      if(document.pointerLockElement == this.canvasAreaElement){
        controls.enabled = true;
      }else{
        controls.enabled = false;
      }
    }, false );
  }
  ngOnDestroy(){
    cancelAnimationFrame(this.animationFrame);
    this.canvasAreaElement.removeEventListener('click',(e)=>{console.log(e)});
    document.removeEventListener('pointerlockchange',(e)=>{console.log(e)});
  }

}
