import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function onResize(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  orbitControls?:OrbitControls
) {
  const resizer = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    orbitControls&&orbitControls.update()

  };
  window.addEventListener("resize", resizer, false);
}
