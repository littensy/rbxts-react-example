import Roact from "@rbxts/roact";

import { Counter } from "./counter";
import { Layer } from "./layer";

export function App() {
	return (
		<Layer>
			<Counter key="counter" />
		</Layer>
	);
}
