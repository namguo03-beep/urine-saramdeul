import Phaser from 'phaser';
import './style.css';
import { GAME_HEIGHT, GAME_WIDTH } from './config.js';
import { PrologueScene } from './scenes/PrologueScene.js';
import { M1_1_MujinOffice } from './scenes/M1_1_MujinOffice.js';
import { M1_2_ChanilOffice } from './scenes/M1_2_ChanilOffice.js';
import { M2_Site } from './scenes/M2_Site.js';
import { M3_Exterior } from './scenes/M3_Exterior.js';
import { M3_Corridor } from './scenes/M3_Corridor.js';
import { M3_1_JaegukStudy } from './scenes/M3_1_JaegukStudy.js';
import { M3_3_DansimRoom } from './scenes/M3_3_DansimRoom.js';
import { M3_2_YangseonGarden } from './scenes/M3_2_YangseonGarden.js';
import { M4_Flashback } from './scenes/M4_Flashback.js';
import { M5_Hideout } from './scenes/M5_Hideout.js';
import { EndingA } from './scenes/EndingA.js';
import { EndingB } from './scenes/EndingB.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: '#111315',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [
    PrologueScene,
    M1_1_MujinOffice,
    M1_2_ChanilOffice,
    M2_Site,
    M3_Exterior,
    M3_Corridor,
    M3_1_JaegukStudy,
    M3_3_DansimRoom,
    M3_2_YangseonGarden,
    M4_Flashback,
    M5_Hideout,
    EndingA,
    EndingB
  ]
};

new Phaser.Game(config);
