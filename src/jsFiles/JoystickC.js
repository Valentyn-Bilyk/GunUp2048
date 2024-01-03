import nipplejs from "nipplejs";
import { ShotgunC } from "./ShotgunC";

export const Joy = {
  manager: nipplejs.create({
    zone: document.querySelector(".moveController"),
    lockX: true,
  }),
};

Joy.manager.on("move", function (evt, nipple) {
  let k = 0;

  if (nipple.force > 0 && nipple.force <= 0.2) k = 1;
  if (nipple.force > 0.2 && nipple.force <= 0.5) k = 2;
  if (nipple.force > 0.5) k = 3;

  let x = Math.cos(nipple.angle.radian) * k;

  ShotgunC.setPhysicsBodyVelocity(x)
});

Joy.manager.on("end", function (evt, nipple) {
  ShotgunC.setPhysicsBodyVelocity(0)
});
