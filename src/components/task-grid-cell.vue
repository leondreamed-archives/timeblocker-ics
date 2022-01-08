<script setup lang="ts">
import TaskBubble from './task-bubble.vue';
import { useAppStore } from '~/store/app';
import { isTaskDrop } from '~/utils/task-drop';
import type { TaskDropData, TaskId } from '~/types/tasks';

const props = defineProps<{
	currentTaskId: TaskId | undefined;
	row: number;
}>();

const store = useAppStore();

function onDrop(event: DragEvent) {
	const dropData = event.dataTransfer?.getData('data') ?? '';
	if (dropData === '') return;
	const data = JSON.parse(dropData) as unknown;
	if (isTaskDrop(data)) {
		const { payload } = data;
		if (payload.source.type === 'grid') {
			const { row: sourceRow } = payload.source;
			const sourceTaskId = store.getTaskAtGridCell({
				row: sourceRow,
			});

			// If there's a task at the source cell, set the source task to the current one
			if (sourceTaskId !== undefined) {
				// If there's a task at the destination cell, then set the sourc
				if (props.currentTaskId === undefined) {
					store.unsetGridCell({ row: sourceRow });
				} else {
					store.setGridCell({
						taskId: props.currentTaskId,
						row: sourceRow,
					});
				}
			}
		}

		store.setGridCell({
			taskId: data.payload.taskId,
			row: props.row,
		});
	}
}

function onDragStart(event: DragEvent) {
	if (props.currentTaskId !== undefined) {
		event.dataTransfer?.setData(
			'data',
			JSON.stringify<TaskDropData>({
				type: 'task-drop',
				payload: {
					taskId: props.currentTaskId,
					source: {
						type: 'grid',
						row: props.row,
					},
				},
			})
		);
	}
}
</script>

<template>
	<div
		class="p-2 flex-grow"
		:draggable="currentTaskId !== undefined"
		@dragstart="onDragStart"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<div
			class="rounded-md h-10 border-2 border-red-50 row justify-between bg-red-50 cursor-pointer"
		>
			<TaskBubble
				v-if="currentTaskId !== undefined"
				class="self-center"
				:task-id="currentTaskId"
			/>
		</div>
	</div>
</template>
