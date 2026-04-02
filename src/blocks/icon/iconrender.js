export function renderIcon(iconData) {
  if (!iconData || !iconData.icon) return '';

  const [width, height, , , path] = iconData.icon;

  return `
    <svg viewBox="0 0 ${width} ${height}" fill="currentColor">
      <path d="${path}" />
    </svg>
  `;
}
