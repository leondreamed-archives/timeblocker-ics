<script setup lang="ts">
import { watch } from 'vue';
import TaskDock from './components/task-dock.vue';
import TaskGrid from './components/task-grid.vue';
import { useAppStore } from './store/app';
import { createConfetti } from './utils/confetti';

const store = useAppStore();

// Shoot confetti when the game is completed
watch(
	() => store.isComplete,
	async (isComplete) => {
		if (isComplete) {
			await createConfetti();
		}
	}
);

// Reset errors when the grid changes
watch(store.taskGrid, () => {
	store.highlightErrors = false;
	store.isComplete = false;
});
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
