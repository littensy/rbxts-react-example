import React from "@rbxts/react";

import { Counter } from "./counter";
import { Layer } from "./layer";

export function App() {
	return (
		<Layer>
			<Counter />
		</Layer>
	);
}
