<script setup lang="ts">
import { computed } from 'vue';
import type { TaskDropData, TaskId } from '~/types/tasks';
import { getTaskInfo } from '~/utils/tasks';
import { useAppStore } from '~/store/app';

const props = defineProps<{
	taskId: TaskId;
}>();

const taskInfo = computed(() => getTaskInfo(props.taskId));

const store = useAppStore();

function onDragStart(event: DragEvent) {
	event.dataTransfer?.setData(
		'data',
		JSON.stringify<TaskDropData>({
			type: 'task-drop',
			payload: {
				source: {
					type: 'dock',
					index: store.taskDock.indexOf(props.taskId),
				},
				taskId: props.taskId,
			},
		})
	);
}
</script>

<template>
	<div
		draggable="true"
		class="rounded-md w-52 h-10 m-2 center border-2 bg-white border-black column text-center text-xs cursor-grab"
		@dragstart="onDragStart"
	>
		<span class="mt-1">{{ taskInfo.name }}</span>
	</div>
</template>
