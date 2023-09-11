import { RunService } from "@rbxts/services";

export const IS_PLUGIN = RunService.IsStudio() && !RunService.IsRunning();
