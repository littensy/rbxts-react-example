/**
 * @param color The color to brighten or darken
 * @param brightness The amount to brighten or darken the color
 * @param vibrancy How much saturation changes with brightness
 */
export function brighten(color: Color3, brightness: number, vibrancy = 0.5) {
	const [h, s, v] = color.ToHSV();
	return Color3.fromHSV(h, math.clamp(s - brightness * vibrancy, 0, 1), math.clamp(v + brightness, 0, 1));
}

/**
 * @param color The color to saturate or desaturate
 * @param saturation How much to add or remove from the color's saturation
 */
export function saturate(color: Color3, saturation: number) {
	const [h, s, v] = color.ToHSV();
	return Color3.fromHSV(h, math.clamp(s + saturation, 0, 1), v);
}

/**
 * @returns How bright the color is
 */
export function getLuminance(color: Color3) {
	return color.R * 0.299 + color.G * 0.587 + color.B * 0.114;
}

/**
 * @returns Whether the color is bright, for determining foreground color
 */
export function isBright(color: Color3) {
	return getLuminance(color) > 0.65;
}
