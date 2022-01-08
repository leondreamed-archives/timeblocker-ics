import type { AppGetterThis } from './types';

export function isGridEmpty(this: AppGetterThis) {
	return this.taskGrid.flat().every((cell) => cell === undefined);
}
