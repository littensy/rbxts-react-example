import { createMotion, Motion, MotionGoal } from "@rbxts/ripple";
import { Binding, useBinding, useEffect, useMemo } from "@rbxts/roact";

export function useMotion(goal: number): LuaTuple<[Binding<number>, Motion<number>]>;

export function useMotion<T extends MotionGoal>(goal: T): LuaTuple<[Binding<T>, Motion<T>]>;

export function useMotion<T extends MotionGoal>(goal: T) {
	const motion = useMemo(() => {
		return createMotion(goal, { start: true });
	}, []);

	const [binding, setValue] = useBinding(motion.get());

	useEffect(() => {
		const disconnect = motion.onStep(setValue);

		return () => {
			disconnect();
			motion.destroy();
		};
	}, []);

	return $tuple(binding, motion);
}
