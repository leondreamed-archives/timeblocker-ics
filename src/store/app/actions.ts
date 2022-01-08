import { nanoid } from 'nanoid';
import type { AppActionThis } from './types';
import type { TaskId, TaskInformation } from '~/types/tasks';

export function addTaskToGrid(
	this: AppActionThis,
	{ taskId, row }: { row: number; taskId: TaskId }
) {
	this.timesGrid[row] = taskId;
}

export function getTaskAtGridCell(
	this: AppActionThis,
	{ row }: { row: number }
) {
	return this.timesGrid[row];
}

export function setGridCell(
	this: AppActionThis,
	{ row, taskId }: { row: number; taskId: TaskId }
) {
	this.timesGrid[row] = taskId;
}

export function unsetGridCell(this: AppActionThis, { row }: { row: number }) {
	this.timesGrid[row] = undefined;
}

export function addTask(
	this: AppActionThis,
	task: Omit<TaskInformation, 'id'>
) {
	const taskId = nanoid() as TaskId;
	this.taskMap.set(taskId, { ...task, id: taskId });
}
