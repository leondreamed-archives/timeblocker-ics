import { quarks } from './quarks';
import { leptons } from './leptons';
import { bosons } from './bosons';
import type { TaskId } from '~/types/tasks';

export const tasksInformation = {
	...quarks,
	...leptons,
	...bosons,
} as const;

export const fundamentalTaskIds = Object.keys(
	tasksInformation
) as TaskId[];
