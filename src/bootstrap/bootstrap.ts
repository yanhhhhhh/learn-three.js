import * as THREE from "three";
import { onResize } from "../util";
import { initOrbitControls } from "../controller";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { initLights } from "./light";
type initSceneParams = {
  backgroundColor?: THREE.ColorRepresentation;
  fogColor?: THREE.ColorRepresentation;
  disableShadows?: boolean;
  disableLights?: boolean;
  disableDefaultControls?: boolean;
};
type Controls = {
  scene:THREE.Scene
  camera:THREE.PerspectiveCamera
  renderer:THREE.WebGLRenderer
  orbitControls?:OrbitControls

}
type FN = (controls:Controls)=>void
export function initScene({
  backgroundColor,
  fogColor,
  disableShadows,
  disableLights,
  disableDefaultControls,
}: initSceneParams) {
  const init = (fn:FN) => {
    //init scene
    const scene = new THREE.Scene();
    if(fogColor){
      scene.fog = new THREE.Fog(fogColor,0.025,50)
    }
    //init camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    //init renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    if (backgroundColor) {
      scene.background = new THREE.Color(backgroundColor);
      renderer.setClearColor(backgroundColor);
    }
    
    renderer.setSize(window.innerWidth,window.innerHeight)

    document.body.appendChild(renderer.domElement); 
    
    let orbitControls;
    if (!disableDefaultControls) {
      //init orbitControls
      orbitControls = initOrbitControls(camera,renderer);
    }
    onResize(camera,renderer,orbitControls)
    if (!disableLights??false) {
      //init light
      initLights(scene,{disableShadows})

    }

    fn({ scene, camera, renderer, orbitControls });

  };
  return init
}
