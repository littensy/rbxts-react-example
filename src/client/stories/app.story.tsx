import "../dev";

import { createRoot } from "@rbxts/react-roblox";
import Roact from "@rbxts/roact";
import { App } from "client/components/app";

export = (target: Instance) => {
	const root = createRoot(target);

	root.render(<App />);

	return () => {
		root.unmount();
	};
};
