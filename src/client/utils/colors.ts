function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t;
}

export function brighten(color: Color3, percent: number, vibrancy = 0.5) {
	const [h, s, v] = color.ToHSV();
	const goal = math.sign(percent) === 1 ? 1 : 0;
	const alpha = math.abs(percent);
	return Color3.fromHSV(h, lerp(s, 1 - goal, alpha * vibrancy), lerp(v, goal, alpha));
}
