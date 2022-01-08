import { tasksInformation } from './info';
import { tasksNamesHtml } from './html';
import type { TaskId } from '~/types/tasks';

export function getTaskInfo(taskId: TaskId) {
	return tasksInformation[taskId];
}

export function getTaskNameHtml(taskId: TaskId) {
	return tasksNamesHtml[taskId];
}
