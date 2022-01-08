<script setup lang="ts">
import TaskDock from './components/task-dock.vue';
import TaskGrid from './components/task-grid.vue';
import { useAppStore } from './store/app';
import type { TaskInformation } from './types/tasks';

const store = useAppStore();
const tasks: Array<Omit<TaskInformation, 'id'>> = [
	{
		name: 'Finish ICS IA',
		description: '',
	},
	{
		name: 'Finish English Homework',
		description: '',
	},
	{
		name: 'Finish Extended Essay',
		description: '',
	},
];
for (const task of tasks) {
	store.addTask(task);
}
</script>

<template>
	<div class="row h-full">
		<TaskDock />
		<div class="flex-grow">
			<div class="font-bold text-6xl text-center mt-2">Schedule</div>
			<TaskGrid class="m-auto" />
		</div>
	</div>
</template>

<style>
html,
body {
	height: 100%;
	margin: 0;
	user-select: none;
}

#app {
	height: 100%;
}
</style>
