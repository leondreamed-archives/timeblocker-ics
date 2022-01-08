import type { TaskId } from '~/types/tasks';
import { useAppStore } from '~/store/app';

export function getTaskInfo(taskId: TaskId) {
	const store = useAppStore();
	return store.taskMap.get(taskId);
}
