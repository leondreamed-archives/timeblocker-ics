import type { AppGetterThis } from './types';

export function taskIds(this: AppGetterThis) {
	return [...this.taskMap.keys()].sort();
}
