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
			const { source, taskId } = data.payload;
			if (source.type === 'grid') {
				store.unsetTaskGridCell({
					column: source.column,
					row: source.row,
				});
				store.taskDock.push(taskId);
			}
		}
	}
}
</script>

<template>
	<div
		class="column items-center px-2 overflow-x-clip pb-5 pt-3 bg-white border-t-2 border-gray-200 overflow-y-auto"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<span class="font-bold text-3xl text-center">Tasks</span>
		<div
			class="column flex-grow z-1"
			:class="{ 'mb-3': store.taskDock.length > 0 }"
		>
			<div v-for="taskId of store.taskDock" :key="taskId">
				<TaskBox :task-id="taskId" />
			</div>
		</div>
	</div>
</template>
