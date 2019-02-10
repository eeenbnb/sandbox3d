import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
declare function require(x: string): any;
(window as any).THREE = THREE;
require('../../../../node_modules/three/examples/js/postprocessing/EffectComposer.js');
require('../../../../node_modules/three/examples/js/postprocessing/RenderPass.js');
require('../../../../node_modules/three/examples/js/shaders/CopyShader.js');
require('../../../../node_modules/three/examples/js/postprocessing/MaskPass.js');
require('../../../../node_modules/three/examples/js/postprocessing/ShaderPass.js');
require('../../../../node_modules/three/examples/js/shaders/DotScreenShader.js');
require('../../../../node_modules/three/examples/js/shaders/RGBShiftShader.js');
require('../../../../node_modules/three/examples/js/postprocessing/BloomPass.js');
require('../../../../node_modules/three/examples/js/shaders/DigitalGlitch.js');
require('../../../../node_modules/three/examples/js/postprocessing/GlitchPass.js');
require('../../../../node_modules/three/examples/js/shaders/ConvolutionShader.js');

@Component({
  selector: 'app-movie-one',
  templateUrl: './movie-one.component.html',
  styleUrls: ['./movie-one.component.css']
})
export class MovieOneComponent implements OnInit {
  @ViewChild('canvasArea') canvasArea:ElementRef;
  canvasAreaElement:Element;
  animationFrame;

  constructor() { }

  ngOnInit() {
    this.canvasAreaElement = this.canvasArea.nativeElement as Element;
    let rendererSize = this.canvasAreaElement.scrollWidth;
    let heightSize  = rendererSize / (16/9);
    const renderer = new THREE.WebGLRenderer({antialias: true});
    var coverObjects = [];
    renderer.setSize( rendererSize, heightSize );
    this.canvasAreaElement.appendChild(renderer.domElement);
    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x3e3e3e );

    //camera
    const camera = new THREE.PerspectiveCamera(45, rendererSize / heightSize, 1, 10000);
    camera.position.set(0, 0, 0);
    camera.lookAt(new THREE.Vector3(0,0,0));
    scene.add(camera);
    //light1
    scene.add( new THREE.AmbientLight( 0xF0F0F0 ) );

    //object
    for(let i = 1;i<=41;i++){
      const geometry = new THREE.BoxGeometry(1,50,1)
      const material = new THREE.MeshPhongMaterial({color:Math.random() * 0xffffff ,emissive:Math.random() * 0xffffff});
      const d = new THREE.Mesh(geometry, material);
      d.position.set( (-21 + i) -50, -50, -10);
      //d.lookAt(camera.position)
      d.rotation.z = -Math.PI/4;
      scene.add(d);
      coverObjects.push({item:d,isMoved:false});
    }

    //effect
    var composer = new (window as any).THREE.EffectComposer( renderer );
    composer.setSize( rendererSize, rendererSize );
    composer.addPass( new (window as any).THREE.RenderPass( scene, camera ) );

    //composer.addPass( new (window as any).THREE.BloomPass(1.0, 25, 1.0, 512) );

    const effectDotScreen = new (window as any).THREE.ShaderPass( (window as any).THREE.DotScreenShader );
		effectDotScreen.uniforms[ 'scale' ].value = 2;
	  //composer.addPass( effectDotScreen );

    var effectRGBShift = new (window as any).THREE.ShaderPass( (window as any).THREE.RGBShiftShader );
		effectRGBShift.uniforms[ 'amount' ].value = 0.01;
    effectRGBShift.renderToScreen = true;
    //composer.addPass( effectRGBShift );

    var effectGlitch = new (window as any).THREE.GlitchPass(128);
    effectGlitch.renderToScreen = true;
    effectGlitch.goWild = true;
    //composer.addPass(effectGlitch);

    var toScreen = new (window as any).THREE.ShaderPass( (window as any).THREE.CopyShader );
    toScreen.renderToScreen = true;
    composer.addPass( toScreen );


    var dg = 0;
    var circleDg = 0;
    var isAddGlith = false;

    const tick = (): void => {
      this.animationFrame = requestAnimationFrame(tick);
      dg += 0.125;

      if(coverObjects.filter((d)=>{return d.isMoved == false}).length >= 10){
        coverObjects.forEach((d,i)=>{
          if(i<dg && d.item.position.y < 0 && !d.isMoved){
            d.item.position.y +=1;
            d.item.position.x +=1;
          }
          if(d.item.position.y >= 0){
            d.isMoved = true;
          }
        });
      }
      else{
        if(!isAddGlith){
          composer.addPass(effectGlitch);
          isAddGlith = true;
        }
      }
      circleDg += 0.025;
      composer.render();
      //renderer.render(scene, camera);
    };
    tick();
  }

  ngOnDestroy(){
    cancelAnimationFrame(this.animationFrame);
  }

}
