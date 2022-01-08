import type { AppStoreState } from './types';
import type { TaskId, TaskInformation } from '~/types/tasks';

export function createAppState(): AppStoreState {
	return {
		timesGrid: Array.from({ length: 24 }),
		taskMap: new Map<TaskId, TaskInformation>(),
	};
}
