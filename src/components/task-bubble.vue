<script setup lang="ts">
import { computed } from 'vue';
import type { TaskId } from '~/types/tasks';
import { getTaskInfo } from '~/utils/tasks';

const props = defineProps<{ taskId: TaskId }>();

const taskInfo = computed(() => getTaskInfo(props.taskId));
</script>

<template>
	<div class="w-full h-full row center bg-red-200 font-bold">
		<div>{{ taskInfo?.name }}</div>
	</div>
</template>

<style scoped>
.task-letter {
	font-family: 'Times New Roman', Times, serif;
}

.task-letter :deep(sub) {
	font-size: 1.5rem;
}
</style>
