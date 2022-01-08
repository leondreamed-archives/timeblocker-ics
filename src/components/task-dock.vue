<script setup lang="ts">
import TaskBox from './task-box.vue';
import { useAppStore } from '~/store/app';
import { isTaskDrop } from '~/utils/task-drop';

const store = useAppStore();

function onDrop(event: DragEvent) {
	const dropData = event.dataTransfer?.getData('data') ?? '';
	if (dropData !== '') {
		const data = JSON.parse(dropData) as unknown;
		if (isTaskDrop(data)) {
			const { source } = data.payload;
			if (source.type === 'grid') {
				store.unsetGridCell({
					row: source.row,
				});
			}
		}
	}
}

function addTask() {
	// eslint-disable-next-line no-alert
	const taskName = prompt('What is the name of this task?');
	if (taskName !== null) {
		store.addTask({
			name: taskName,
			description: '',
		});
	}
}
</script>

<template>
	<div
		class="column items-center px-2 overflow-x-clip pb-5 pt-3 bg-white border-r-2 border-gray-200 overflow-y-auto"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<span class="font-bold text-3xl text-center">Tasks</span>
		<div class="column flex-grow z-1">
			<div
				class="bg-green-500 rounded-md hover:bg-green-600 text-center font-bold text-white px-5 mt-2 mb-1 cursor-pointer py-2 self-center"
				@click="addTask"
			>
				Add Task
			</div>
			<div v-for="taskId of store.taskIds" :key="taskId">
				<TaskBox :task-id="taskId" />
			</div>
		</div>
	</div>
</template>
