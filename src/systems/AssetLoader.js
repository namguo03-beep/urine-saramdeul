import { ASSET_MANIFEST } from '../data/assetManifest.js';
import { createSvgPlaceholder } from '../utils/createPlaceholderAssets.js';

export class AssetLoader {
  constructor(scene) {
    this.scene = scene;
  }

  ensureFallbacks() {
    for (const asset of ASSET_MANIFEST) {
      if (asset.fileName === 'code_only' || asset.fallbackType === 'css_ui') continue;
      if (this.scene.textures.exists(asset.key)) continue;
      const svg = createSvgPlaceholder(asset);
      this.scene.textures.addBase64(asset.key, `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`);
    }
  }
}
