import mapObject from 'map-obj';
import type { TaskInformation } from '~/types/tasks';

export const defineTasks = <
	T extends string,
	P extends Record<string, Omit<TaskInformation, 'type'>>
>(
	type: T,
	tasks: P
): { [K in keyof P]: P[K] & { type: T } } =>
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	mapObject(tasks, (name, taskInfo) => [
		name as string,
		{ ...taskInfo, type },
	]) as any;
