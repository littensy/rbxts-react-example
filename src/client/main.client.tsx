import "./dev";

import { createRoot } from "@rbxts/react-roblox";
import Roact, { Portal, StrictMode } from "@rbxts/roact";
import { Players } from "@rbxts/services";

import { App } from "./components/app";

const root = createRoot(new Instance("Folder"));
const target = Players.LocalPlayer.WaitForChild("PlayerGui");

root.render(
	<StrictMode>
		<Portal key="portal" target={target}>
			<App key="app" />
		</Portal>
	</StrictMode>,
);
