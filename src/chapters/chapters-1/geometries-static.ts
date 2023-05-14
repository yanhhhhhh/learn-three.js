import  {
  BoxGeometry,
  Mesh,
  MeshPhongMaterial,
 
} from "three";
import { initScene } from "../../bootstrap/bootstrap";
import { foreverPlane } from "../../bootstrap/floor";
import * as THREE from 'three'
const props = {
  backgroundColor: 0xffffff,
  fogColor: 0xffffff,
};
initScene(props)(({ scene, camera, renderer, orbitControls }) => {
  const geometry = new BoxGeometry();
  const cubeMaterial = new MeshPhongMaterial({ color: 0xff00ff });
  const cube = new Mesh(geometry, cubeMaterial);
  cube.position.x = -1;
  cube.castShadow = true;
  scene.add(cube);

  const torusKnotGeom = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 100);
  const torusKnotMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ff88,
    roughness: 0.1,
  });
  const torusKnotMesh = new Mesh(torusKnotGeom, torusKnotMaterial);
  torusKnotMesh.castShadow = true;
  torusKnotMesh.position.x = 2;
  scene.add(torusKnotMesh);

  camera.position.x = -3;
  camera.position.z = 3;
  camera.position.y = 2;
  if (orbitControls) orbitControls.update();

  foreverPlane(scene);
  renderer.render(scene, camera);
});
