declare class TaskIdString extends String {
	private readonly __taskId: true;
}

export type TaskId = string & TaskIdString;

export type TaskInformation = {
	name: string;
	description: string;
};

export type TaskDropData = {
	type: 'task-drop';
	payload: {
		taskId: TaskId;
		source:
			| {
					type: 'grid';
					row: number;
			  }
			| {
					type: 'dock';
					row: number;
			  };
	};
};

export type TimesGrid = Array<TaskId | undefined>;
