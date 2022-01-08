import type * as appActions from './actions';
import type * as appGetters from './getters';
import type { TaskId, TaskInformation, TimesGrid } from '~/types/tasks';
import type { ActionThis, GetterThis, RawStore } from '~/types/store';

export type AppStoreState = {
	timesGrid: TimesGrid;
	taskMap: Map<TaskId, TaskInformation>;
};

type AppActions = typeof appActions;
type AppGetters = typeof appGetters;

export type AppActionThis = ActionThis<
	'app',
	AppStoreState,
	AppGetters,
	AppActions
>;

export type AppGetterThis = GetterThis<AppStoreState, AppGetters>;
export type AppStore = RawStore<'app', AppStoreState, AppGetters, AppActions>;
