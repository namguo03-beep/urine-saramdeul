export const ASSET_MANIFEST = [
  {
    key: 'bg_prologue_black',
    fileName: 'backgrounds/prologue_black.svg',
    category: 'background',
    useScenes: ['PrologueScene'],
    required: true,
    fallbackType: 'svg_placeholder',
    description: '프롤로그 검은 화면과 타이핑 텍스트'
  },
  {
    key: 'bg_mujin_office',
    fileName: 'backgrounds/mujin_office.svg',
    category: 'background',
    useScenes: ['M1_1_MujinOffice'],
    required: true,
    fallbackType: 'svg_placeholder',
    description: '동양그룹 본사 집무실'
  },
  {
    key: 'bg_chanil_office',
    fileName: 'backgrounds/chanil_office.svg',
    category: 'background',
    useScenes: ['M1_2_ChanilOffice'],
    required: true,
    fallbackType: 'svg_placeholder',
    description: '황찬일 집무실'
  },
  {
    key: 'char_mujin_default',
    fileName: 'characters/mujin_default.svg',
    category: 'character',
    useScenes: ['M1_1_MujinOffice'],
    required: true,
    fallbackType: 'svg_placeholder',
    description: '황무진 기본 대화 일러스트'
  },
  {
    key: 'char_dansim_bright',
    fileName: 'characters/dansim_bright.svg',
    category: 'character',
    useScenes: ['M1_1_MujinOffice', 'M1_2_ChanilOffice'],
    required: true,
    fallbackType: 'svg_placeholder',
    description: '황단심 밝은 조력자 일러스트'
  },
  {
    key: 'char_chanil_relaxed',
    fileName: 'characters/chanil_relaxed.svg',
    category: 'character',
    useScenes: ['M1_2_ChanilOffice'],
    required: true,
    fallbackType: 'svg_placeholder',
    description: '황찬일 여유로운 1차 대화 일러스트'
  },
  {
    key: 'obj_pc_firewall',
    fileName: 'objects/pc_firewall.svg',
    category: 'object',
    useScenes: ['M1_2_ChanilOffice'],
    required: true,
    fallbackType: 'text_panel',
    description: 'AI 복합센터 내부회선 접속 프로그램'
  },
  {
    key: 'ui_dialogue_box',
    fileName: 'ui/dialogue_box.svg',
    category: 'ui',
    useScenes: ['__ALL_DIALOGUE__'],
    required: true,
    fallbackType: 'css_ui',
    description: '대화창 UI'
  },
  {
    key: 'fx_screen_shake',
    fileName: 'code_only',
    category: 'effect',
    useScenes: ['M3_Exterior', 'M1_2_ChanilOffice', 'M5_Hideout'],
    required: false,
    fallbackType: 'phaser_graphics',
    description: 'Phaser tween 기반 화면 흔들림'
  }
];
