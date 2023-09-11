import { RunService } from "@rbxts/services";

declare const _G: Record<string, unknown>;

if (RunService.IsStudio()) {
	_G.__DEV__ = true;
}
