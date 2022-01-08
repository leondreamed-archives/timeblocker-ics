import type { TaskDropData } from '~/types/tasks';

export function isTaskDrop(data: unknown): data is TaskDropData {
	if (data !== null && typeof data === 'object') {
		return (data as { type?: string }).type === 'task-drop';
	}

	return false;
}
