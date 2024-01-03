import { world } from "./Core";
import * as CANNON from 'cannon-es'

export const ShotgunC = {
  threeObj: null,
  position: { x: 0, y: 0, z: 0 },
  init: function (gltf_obj) {
    this.threeObj = gltf_obj
    this.position = this.threeObj.position;
    this.threeObj.scale.z = 0.7
    this.position.y = 0.15
    this.position.z = -0.5
    ShotgunC.initPhysics(world)
  },
  update: function () {
    if (!this.threeObj) return;
    this.updatePosition();
  },
  updatePosition() {
    this.position.x = this.physicsBody.position.x;
    this.position.z = this.physicsBody.position.z;
  },
  initPhysics(world) {
    const shape = new CANNON.Box(new CANNON.Vec3(0.05, 0.2, 0.3));
    this.physicsBody = new CANNON.Body({
      mass: 0.1,
      position: new CANNON.Vec3(this.position.x, 0.5, this.position.z),
      shape: shape,
      velocity: null,
    });
    world.addBody(this.physicsBody);

    // this.physicsBody.addEventListener('collide', handleCollision)
  },
  setPhysicsBodyVelocity(x) {
    this.physicsBody.velocity = new CANNON.Vec3(x, 0, -1);
  },
}