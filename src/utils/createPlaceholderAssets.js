export function createSvgPlaceholder(asset) {
  const label = escapeXml(asset.key);
  const description = escapeXml(asset.description ?? asset.category ?? 'placeholder');
  const bg = asset.category === 'background' ? '#26323d' : '#2e3338';
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="${bg}"/>
  <rect x="28" y="28" width="904" height="484" fill="none" stroke="#d1b36a" stroke-width="4"/>
  <text x="60" y="220" fill="#f3efe5" font-family="Arial, sans-serif" font-size="42" font-weight="700">${label}</text>
  <text x="60" y="280" fill="#d7dde2" font-family="Arial, sans-serif" font-size="24">${description}</text>
</svg>`;
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
