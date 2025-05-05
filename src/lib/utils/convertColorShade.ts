/**
 * Lightens a hex color by the given amount.
 * @param hex - The hex color code (e.g., "#339933").
 * @param amount - A number between 0 and 1 indicating how much to lighten (0 = no change, 1 = white).
 * @returns A new lightened hex color string.
 */
export function lightenColor(hex: string, amount: number): string {
  if (!/^#([A-Fa-f0-9]{6})$/.test(hex)) {
    throw new Error("Invalid hex color format. Use #RRGGBB");
  }

  const num = parseInt(hex.slice(1), 16);

  const r = Math.min(255, Math.round(((num >> 16) & 0xff) + (255 - (num >> 16 & 0xff)) * amount));
  const g = Math.min(255, Math.round(((num >> 8) & 0xff) + (255 - (num >> 8 & 0xff)) * amount));
  const b = Math.min(255, Math.round((num & 0xff) + (255 - (num & 0xff)) * amount));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
/**
 * Darkens a hex color by the given amount.
 * @param hex - The hex color code (e.g., "#339933").
 * @param amount - A number between 0 and 1 indicating how much to darken (0 = no change, 1 = black).
 * @returns A new darkened hex color string.
 */
export function darkenColor(hex: string, amount: number): string {
  if (!/^#([A-Fa-f0-9]{6})$/.test(hex)) {
    throw new Error("Invalid hex color format. Use #RRGGBB");
  }

  const num = parseInt(hex.slice(1), 16);

  const r = Math.max(0, Math.round(((num >> 16) & 0xff) * (1 - amount)));
  const g = Math.max(0, Math.round(((num >> 8) & 0xff) * (1 - amount)));
  const b = Math.max(0, Math.round((num & 0xff) * (1 - amount)));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}