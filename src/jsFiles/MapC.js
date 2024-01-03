import { ThreeC } from "./ThreeC"

export const MapC = {
  threeObj: null,
  init: function (gltf_obj) {
    this.threeObj = gltf_obj
    this.threeObj.children.forEach(el => el.name !== "Ground" ? el.visible = false : el.visible = true)

    const ground = this.threeObj.getObjectByName("Ground").children
    ground.forEach(el => el.name === 'Ground_tile' ? el.visible = true : el. visible = false)
    const road = this.threeObj.getObjectByName('Ground_tile')

    for (let i = 0, k = -2; i < 20; i++) {
      const cloneRoad = road.clone()
      cloneRoad.position.set(0, 0, k)
      ThreeC.scene.add(cloneRoad)
      k += -2
    }
    

  }
}