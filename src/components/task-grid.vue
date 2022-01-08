<script setup lang="ts">
import TaskGridCell from './task-grid-cell.vue';
import { useAppStore } from '~/store/app';

const store = useAppStore();

const times = [...Array.from({ length: 24 }).keys()].map(
	(n) => `${n}:00 - ${n + 1}:00`
);
</script>

<template>
	<div class="overflow-y-auto overflow-x-auto column w-full">
		<div class="grid grid-cols-[max-content,auto] p-2 w-full mx-auto">
			<div
				v-for="(taskId, rowIndex) of store.timesGrid"
				:key="taskId"
				class="row items-center"
				:style="{ 'grid-row-start': rowIndex + 1 }"
			>
				<div style="grid-column-start: 1">
					{{ times[rowIndex] }}
				</div>
				<TaskGridCell
					style="grid-column-start: 2"
					:current-task-id="taskId"
					:row="rowIndex"
				/>
			</div>
		</div>
	</div>
</template>
