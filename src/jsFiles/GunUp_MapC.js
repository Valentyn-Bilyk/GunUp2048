import { MapC } from "./MapC"
import { ShotgunC } from "./ShotgunC"

export const GunUp_MapC = {
  threeObj: null,
  init: function (gltf_obj) {
    this.threeObj = gltf_obj.scene
    this.threeObj.children[0].visible = false
    this.threeObj.children[2].visible = false

    MapC.init(this.threeObj.getObjectByName('Map'))
    ShotgunC.init(this.threeObj.getObjectByName('shotgun'))
  }
}