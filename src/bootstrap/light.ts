import { AmbientLight, DirectionalLight, Scene } from "three";

export function initLights(
  scene: Scene,
  { disableShadows }: { disableShadows?: boolean }
) {
  scene.add(new AmbientLight(0x666666))

  const dirLight = new DirectionalLight(0xaaaaaa);
  dirLight.position.set(5, 12, 8);
  dirLight.castShadow = !disableShadows ? true : false;
  dirLight.intensity = 1;
  dirLight.shadow.camera.near = 0.01;
  dirLight.shadow.camera.far = 100;
  dirLight.shadow.camera.left = -10;
  dirLight.shadow.camera.right = 10;
  dirLight.shadow.camera.top = 10;
  dirLight.shadow.camera.bottom = -10;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.shadow.radius = 4;
  dirLight.shadow.bias = -0.00005;
  
  scene.add(dirLight)

}
