import { useCallback, useEffect, useState } from "@rbxts/roact";
import { Workspace } from "@rbxts/services";

const BASE_REM = 16;
const BASE_VIEWPORT = new Vector2(1920, 1080);
const DOMINANT_AXIS = 0.5;

/**
 * @see https://discord.com/channels/476080952636997633/476080952636997635/1146857136358432900
 */
function calculateRem(viewport: Vector2) {
	const width = math.log(viewport.X / BASE_VIEWPORT.X, 2);
	const height = math.log(viewport.Y / BASE_VIEWPORT.Y, 2);
	const centered = width + (height - width) * DOMINANT_AXIS;

	return BASE_REM * 2 ** centered;
}

export function useRem() {
	const [rem, setRem] = useState(BASE_REM);

	useEffect(() => {
		const camera = Workspace.CurrentCamera!;

		const connection = camera.GetPropertyChangedSignal("ViewportSize").Connect(() => {
			setRem(calculateRem(camera.ViewportSize));
		});

		setRem(calculateRem(camera.ViewportSize));

		return () => {
			connection.Disconnect();
		};
	}, []);

	return useCallback(
		(value: number) => {
			return value * rem;
		},
		[rem],
	);
}
