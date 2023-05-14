import * as THREE from 'three'

export const foreverPlane = (scene :THREE.Scene) => {
  const geo = new THREE.PlaneGeometry(10000, 10000)
  const mat = new THREE.MeshLambertMaterial({
    color: 0xffffff
  })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(0, -2, 0)
  mesh.rotation.set(Math.PI / -2, 0, 0)
  mesh.receiveShadow = true
  mesh.name = 'forever-floor'
  scene.add(mesh)

  return mesh
}

export const floatingFloor = (scene:THREE.Scene, size:number) => {
  const s = size ? size : 6
  const geo = new THREE.BoxGeometry(s, 0.25, s, 10, 10, 10)
  const mat = new THREE.MeshStandardMaterial({
    color: 0xdddddd
  })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(0, -2, -1)
  mesh.receiveShadow = true
  mesh.name = 'floating-floor'
  scene.add(mesh)

  return mesh
}
