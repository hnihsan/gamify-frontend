// @ts-ignore
import GLB1 from "~/src/assets/icons/achievements/GLB1.png"; // @ts-ignore
import GLB2 from "~/src/assets/icons/achievements/GLB2.png"; // @ts-ignore
import GLB3 from "~/src/assets/icons/achievements/GLB3.png"; // @ts-ignore
import GLBB1 from "~/src/assets/icons/achievements/GLBB1.png"; // @ts-ignore
import GLBB2 from "~/src/assets/icons/achievements/GLBB2.png"; // @ts-ignore
import GLBB3 from "~/src/assets/icons/achievements/GLBB3.png"; // @ts-ignore
import GJB1 from "~/src/assets/icons/achievements/GJB1.png"; // @ts-ignore
import GJB2 from "~/src/assets/icons/achievements/GJB2.png"; // @ts-ignore
import GJB3 from "~/src/assets/icons/achievements/GJB3.png"; // @ts-ignore
import GV1 from "~/src/assets/icons/achievements/GVA1.png"; // @ts-ignore
import GV2 from "~/src/assets/icons/achievements/GVA2.png"; // @ts-ignore
import GV3 from "~/src/assets/icons/achievements/GVA3.png"; // @ts-ignore
import LOCK from "~/src/assets/icons/achievements/LOCK.png"; // @ts-ignore

import egg from "~/src/assets/icons/levels/egg.png"; // @ts-ignore
import cocoon from "~/src/assets/icons/levels/cocoon.png"; // @ts-ignore
import cocoon_lock from "~/src/assets/icons/levels/cocoon-lock.png"; // @ts-ignore
import caterpillar from "~/src/assets/icons/levels/caterpillar.png"; // @ts-ignore
import caterpillar_lock from "~/src/assets/icons/levels/caterpillar-lock.png"; // @ts-ignore
import butterfly from "~/src/assets/icons/levels/butterfly.png"; // @ts-ignore
import butterfly_lock from "~/src/assets/icons/levels/butterfly-lock.png"; // @ts-ignore

import MALE1 from "~/src/assets/avatars/male/1.png"; // @ts-ignore
import MALE2 from "~/src/assets/avatars/male/2.png"; // @ts-ignore
import MALE3 from "~/src/assets/avatars/male/3.png"; // @ts-ignore
import MALE4 from "~/src/assets/avatars/male/4.png"; // @ts-ignore
import MALE5 from "~/src/assets/avatars/male/5.png"; // @ts-ignore
import MALE6 from "~/src/assets/avatars/male/6.png"; // @ts-ignore
import MALE7 from "~/src/assets/avatars/male/7.png"; // @ts-ignore
import MALE8 from "~/src/assets/avatars/male/8.png"; // @ts-ignore

import FEMALE1 from "~/src/assets/avatars/female/1.png"; // @ts-ignore
import FEMALE2 from "~/src/assets/avatars/female/2.png"; // @ts-ignore
import FEMALE3 from "~/src/assets/avatars/female/3.png"; // @ts-ignore
import FEMALE4 from "~/src/assets/avatars/female/4.png"; // @ts-ignore
import FEMALE5 from "~/src/assets/avatars/female/5.png"; // @ts-ignore
import FEMALE6 from "~/src/assets/avatars/female/6.png"; // @ts-ignore
import FEMALE7 from "~/src/assets/avatars/female/7.png"; // @ts-ignore
import FEMALE8 from "~/src/assets/avatars/female/8.png"; // @ts-ignore

import FRAME11 from "~/src/assets/avatars/frames/level_1/1.png"; // @ts-ignore
import FRAME12 from "~/src/assets/avatars/frames/level_1/2.png"; // @ts-ignore
import FRAME13 from "~/src/assets/avatars/frames/level_1/3.png"; // @ts-ignore
import FRAME14 from "~/src/assets/avatars/frames/level_1/4.png"; // @ts-ignore
import FRAME15 from "~/src/assets/avatars/frames/level_1/5.png"; // @ts-ignore
import FRAME16 from "~/src/assets/avatars/frames/level_1/6.png"; // @ts-ignore
import FRAME17 from "~/src/assets/avatars/frames/level_1/7.png"; // @ts-ignore
import FRAME18 from "~/src/assets/avatars/frames/level_1/8.png"; // @ts-ignore

import FRAME21 from "~/src/assets/avatars/frames/level_2/1.png"; // @ts-ignore
import FRAME22 from "~/src/assets/avatars/frames/level_2/2.png"; // @ts-ignore
import FRAME23 from "~/src/assets/avatars/frames/level_2/3.png"; // @ts-ignore
import FRAME24 from "~/src/assets/avatars/frames/level_2/4.png"; // @ts-ignore
import FRAME25 from "~/src/assets/avatars/frames/level_2/5.png"; // @ts-ignore
import FRAME26 from "~/src/assets/avatars/frames/level_2/6.png"; // @ts-ignore
import FRAME27 from "~/src/assets/avatars/frames/level_2/7.png"; // @ts-ignore
import FRAME28 from "~/src/assets/avatars/frames/level_2/8.png"; // @ts-ignore

import FRAME31 from "~/src/assets/avatars/frames/level_3/1.png"; // @ts-ignore
import FRAME32 from "~/src/assets/avatars/frames/level_3/2.png"; // @ts-ignore
import FRAME33 from "~/src/assets/avatars/frames/level_3/3.png"; // @ts-ignore
import FRAME34 from "~/src/assets/avatars/frames/level_3/4.png"; // @ts-ignore
import FRAME35 from "~/src/assets/avatars/frames/level_3/5.png"; // @ts-ignore
import FRAME36 from "~/src/assets/avatars/frames/level_3/6.png"; // @ts-ignore
import FRAME37 from "~/src/assets/avatars/frames/level_3/7.png"; // @ts-ignore
import FRAME38 from "~/src/assets/avatars/frames/level_3/8.png"; // @ts-ignore

import FRAME41 from "~/src/assets/avatars/frames/level_4/1.png"; // @ts-ignore
import FRAME42 from "~/src/assets/avatars/frames/level_4/2.png"; // @ts-ignore
import FRAME43 from "~/src/assets/avatars/frames/level_4/3.png"; // @ts-ignore
import FRAME44 from "~/src/assets/avatars/frames/level_4/4.png"; // @ts-ignore
import FRAME45 from "~/src/assets/avatars/frames/level_4/5.png"; // @ts-ignore
import FRAME46 from "~/src/assets/avatars/frames/level_4/6.png"; // @ts-ignore
import FRAME47 from "~/src/assets/avatars/frames/level_4/7.png"; // @ts-ignore
import FRAME48 from "~/src/assets/avatars/frames/level_4/8.png"; // @ts-ignore
import { User } from "../models/User";

class FramesPicModel {
  src: any;
  level: string;
  code: string;

  constructor(code: string, src: any, level: string) {
    this.code = code;
    this.src = src;
    this.level = level;
  }
}

export const AchievementsIconLibrary = {
  GLB1: GLB1,
  GLB2: GLB2,
  GLB3: GLB3,
  GLBB1: GLBB1,
  GLBB2: GLBB2,
  GLBB3: GLBB3,
  GJB1: GJB1,
  GJB2: GJB2,
  GJB3: GJB3,
  GV1: GV1,
  GV2: GV2,
  GV3: GV3,
  LOCK: LOCK,
};

export const GetAchievementThumbnail = (
  completedCodes: Array<string>,
  code: string
) => {
  var isCompleted = completedCodes.includes(code);
  if (isCompleted) return AchievementsIconLibrary[code];
  else return AchievementsIconLibrary["LOCK"];
};

export const ProgressLevelTitle = {
  LEVEL_1: "Telur",
  LEVEL_2: "Kepompong",
  LEVEL_3: "Ulat",
  LEVEL_4: "Kupu-kupu",
};

export const ProgressLevelIcon = {
  LEVEL_1: egg,
  LEVEL_2: cocoon,
  LEVEL_3: caterpillar,
  LEVEL_4: butterfly,
};

export const ProgressBarIcons = {
  LEVEL_1: [egg, cocoon_lock, caterpillar_lock, butterfly_lock],
  LEVEL_2: [egg, cocoon, caterpillar_lock, butterfly_lock],
  LEVEL_3: [egg, cocoon, caterpillar, butterfly_lock],
  LEVEL_4: [egg, cocoon, caterpillar, butterfly],
};

export const AvatarsPic = {
  MALE1: MALE1,
  MALE2: MALE2,
  MALE3: MALE3,
  MALE4: MALE4,
  MALE5: MALE5,
  MALE6: MALE6,
  MALE7: MALE7,
  MALE8: MALE8,

  FEMALE1: FEMALE1,
  FEMALE2: FEMALE2,
  FEMALE3: FEMALE3,
  FEMALE4: FEMALE4,
  FEMALE5: FEMALE5,
  FEMALE6: FEMALE6,
  FEMALE7: FEMALE7,
  FEMALE8: FEMALE8,
};

export const FramesPic = {
  FRAME11: FRAME11,
  FRAME12: FRAME12,
  FRAME13: FRAME13,
  FRAME14: FRAME14,
  FRAME15: FRAME15,
  FRAME16: FRAME16,
  FRAME17: FRAME17,
  FRAME18: FRAME18,
  FRAME21: FRAME21,
  FRAME22: FRAME22,
  FRAME23: FRAME23,
  FRAME24: FRAME24,
  FRAME25: FRAME25,
  FRAME26: FRAME26,
  FRAME27: FRAME27,
  FRAME28: FRAME28,
  FRAME31: FRAME31,
  FRAME32: FRAME32,
  FRAME33: FRAME33,
  FRAME34: FRAME34,
  FRAME35: FRAME35,
  FRAME36: FRAME36,
  FRAME37: FRAME37,
  FRAME38: FRAME38,
  FRAME41: FRAME41,
  FRAME42: FRAME42,
  FRAME43: FRAME43,
  FRAME44: FRAME44,
  FRAME45: FRAME45,
  FRAME46: FRAME46,
  FRAME47: FRAME47,
  FRAME48: FRAME48,
};

export const FramesSelection: Array<FramesPicModel> = [
  new FramesPicModel("FRAME11", FRAME11, "LEVEL_1"),
  new FramesPicModel("FRAME12", FRAME12, "LEVEL_1"),
  new FramesPicModel("FRAME13", FRAME13, "LEVEL_1"),
  new FramesPicModel("FRAME14", FRAME14, "LEVEL_1"),
  new FramesPicModel("FRAME15", FRAME15, "LEVEL_1"),
  new FramesPicModel("FRAME16", FRAME16, "LEVEL_1"),
  new FramesPicModel("FRAME17", FRAME17, "LEVEL_1"),
  new FramesPicModel("FRAME18", FRAME18, "LEVEL_1"),
  new FramesPicModel("FRAME21", FRAME21, "LEVEL_2"),
  new FramesPicModel("FRAME22", FRAME22, "LEVEL_2"),
  new FramesPicModel("FRAME23", FRAME23, "LEVEL_2"),
  new FramesPicModel("FRAME24", FRAME24, "LEVEL_2"),
  new FramesPicModel("FRAME25", FRAME25, "LEVEL_2"),
  new FramesPicModel("FRAME26", FRAME26, "LEVEL_2"),
  new FramesPicModel("FRAME27", FRAME27, "LEVEL_2"),
  new FramesPicModel("FRAME28", FRAME28, "LEVEL_2"),
  new FramesPicModel("FRAME31", FRAME31, "LEVEL_3"),
  new FramesPicModel("FRAME32", FRAME32, "LEVEL_3"),
  new FramesPicModel("FRAME33", FRAME33, "LEVEL_3"),
  new FramesPicModel("FRAME34", FRAME34, "LEVEL_3"),
  new FramesPicModel("FRAME35", FRAME35, "LEVEL_3"),
  new FramesPicModel("FRAME36", FRAME36, "LEVEL_3"),
  new FramesPicModel("FRAME37", FRAME37, "LEVEL_3"),
  new FramesPicModel("FRAME38", FRAME38, "LEVEL_3"),
  new FramesPicModel("FRAME41", FRAME41, "LEVEL_4"),
  new FramesPicModel("FRAME42", FRAME42, "LEVEL_4"),
  new FramesPicModel("FRAME43", FRAME43, "LEVEL_4"),
  new FramesPicModel("FRAME44", FRAME44, "LEVEL_4"),
  new FramesPicModel("FRAME45", FRAME45, "LEVEL_4"),
  new FramesPicModel("FRAME46", FRAME46, "LEVEL_4"),
  new FramesPicModel("FRAME47", FRAME47, "LEVEL_4"),
  new FramesPicModel("FRAME48", FRAME48, "LEVEL_4"),
];

export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
