import { Component, OnInit , OnDestroy , ViewChild , ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-pin-ball',
  templateUrl: './pin-ball.component.html',
  styleUrls: ['./pin-ball.component.css']
})
export class PinBallComponent implements OnInit {
  @ViewChild('canvasArea') canvasArea:ElementRef;
  canvasAreaElement:Element;
  animationFrame;

  constructor() { }

  ngOnInit() {
    this.canvasAreaElement = this.canvasArea.nativeElement as Element;
    let rendererSize = this.canvasAreaElement.scrollWidth;
    const xObjects = [];
    const zObjects = [];
    const deleteObjects = [];
    var ballMoveAmout = {
      x:0.5,
      z:0.5
    };
    var dg =0;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( rendererSize, rendererSize );
    this.canvasAreaElement.appendChild(renderer.domElement);
    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x5e5e5e );
    //scene.add( new THREE.GridHelper( 1000, 1000 ) );
    //scene.add( new THREE.AxisHelper(20) );

    //camera
    const camera = new THREE.PerspectiveCamera(45, rendererSize / rendererSize, 1, 10000);
    camera.position.set(0, 100, -120);
    camera.lookAt(new THREE.Vector3(0,0,0));
    scene.add(camera);
    //light
    //scene.add( new THREE.AmbientLight( 0xF0F0F0 ) );
    var light = new THREE.PointLight( 0x000000, 1, 100 );
    light.position.set( 0, 0, 10 );
    scene.add( light );

    const geometry = new THREE.IcosahedronGeometry(1,5)
    const material = new THREE.MeshPhongMaterial({color: 0x000000,emissive:0xf0f0f0});
    const ball     = new THREE.Mesh(geometry, material);
    ball.position.set(0,0.5,0);
    scene.add(ball);
    //foller
    {
      const geometry = new THREE.BoxGeometry(40,0,100)
      const material = new THREE.MeshPhongMaterial({color: 0xf0f0f0});
      const box      = new THREE.Mesh(geometry, material);
      box.position.set(0,0,0);
      scene.add(box);
    }
    //side
    {
      const boxGeometry = new THREE.BoxGeometry(1,2,100)
      const material    = new THREE.MeshPhongMaterial({color: 0x000000,emissive:0xfefefe});
      const leftBar     = new THREE.Mesh(boxGeometry, material);
      const rightBar    = new THREE.Mesh(boxGeometry, material);
      leftBar.position.set(20,1,0);
      rightBar.position.set(-20,1,0);
      scene.add(leftBar);
      scene.add(rightBar);
      xObjects.push(leftBar);
      xObjects.push(rightBar);
    }
    //front back
    {
      const boxGeometry = new THREE.BoxGeometry(41,2,1)
      const material = new THREE.MeshPhongMaterial({color: 0xfefefe,emissive:0xfefefe});
      const upBar      = new THREE.Mesh(boxGeometry, material);
      const underBar      = new THREE.Mesh(boxGeometry, material);
      upBar.position.set(0,1,50);
      underBar.position.set(0,1,-50);
      scene.add(upBar);
      scene.add(underBar);
      zObjects.push(upBar);
      zObjects.push(underBar);
    }
    for(var i=0;i<20;i++){
      const geometry = new THREE.IcosahedronGeometry(1,5)
      const material = new THREE.MeshPhongMaterial({color:Math.floor(Math.random()*16777215),emissive:Math.floor(Math.random()*16777215)});
      for(var j=0;j<10;j++){
        const ball     = new THREE.Mesh(geometry, material);
        ball.position.set( 9 - j*2,0.5, 40 - i*2);
        scene.add(ball);
        deleteObjects.push(ball);
      }
    }




    const tick = (): void => {
      const ray = new THREE.Raycaster( ball.position,new THREE.Vector3(0,0,0).sub(ball.position).normalize());
      const xIntersections = ray.intersectObjects(xObjects);
      const zIntersections = ray.intersectObjects(zObjects);
      const intersections = ray.intersectObjects(deleteObjects);

      if ( xIntersections.length > 0 ) {
        ballMoveAmout.x *= -1;
      }
      if ( zIntersections.length > 0 ) {
        ballMoveAmout.z *= -1;
      }

      if ( intersections.length > 0 ) {
        ballMoveAmout.x *= -1;
        ballMoveAmout.z *= -1;
      }

      ball.position.x += ballMoveAmout.x
      ball.position.z += ballMoveAmout.z

      dg += 0.25;
      camera.position.x = Math.cos(THREE.Math.degToRad(dg)) * 100;
      camera.position.z = Math.sin(THREE.Math.degToRad(dg)) * 100;

      camera.lookAt(new THREE.Vector3(0,0,0));

      this.animationFrame = requestAnimationFrame(tick);
      renderer.render(scene, camera);
    };
    tick();
  }
  ngOnDestroy(){
    cancelAnimationFrame(this.animationFrame);
  }

}
