<script setup lang="ts">
import { computed } from 'vue';
import ParticleGridCell from './particle-grid-cell.vue';
import { useAppStore } from '~/store/app';

const store = useAppStore();

const particleGrid = computed(() => store.particleGrid);

// eslint-disable-next-line unicorn/new-for-builtins
const times = [...Array(24).keys()].map((n) => `${n}:00 - ${n + 1}:00`);
</script>

<template>
	<div class="overflow-y-auto overflow-x-auto column w-full">
		<div class="column p-2 w-full mx-auto">
			<template v-for="(particleRow, rowIndex) of particleGrid" :key="rowIndex">
				<div
					v-for="(particleName, columnIndex) of particleRow"
					:key="particleName"
					class="row items-center"
					:style="{ 'grid-row-start': rowIndex + 1 }"
				>
					<div>{{ times[rowIndex * 4 + columnIndex] }}</div>
					<ParticleGridCell
						:current-particle-id="particleName"
						:column="columnIndex"
						:row="rowIndex"
					/>
				</div>
			</template>
		</div>
	</div>
</template>
