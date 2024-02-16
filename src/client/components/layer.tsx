import React from "@rbxts/react";
import { IS_PLUGIN } from "shared/constants";

interface LayerProps {
	displayOrder?: number;
	children?: React.ReactNode;
}

export function Layer({ displayOrder, children }: LayerProps) {
	return IS_PLUGIN ? (
		<frame
			BackgroundTransparency={1}
			Size={new UDim2(1, 0, 1, 0)}
			Position={new UDim2(0, 0, 0, 0)}
			ZIndex={displayOrder}
		>
			{children}
		</frame>
	) : (
		<screengui
			DisplayOrder={displayOrder}
			IgnoreGuiInset
			ResetOnSpawn={false}
			ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
		>
			{children}
		</screengui>
	);
}
