<script setup lang="ts">
import ParticleBox from './particle-box.vue';
import { useAppStore } from '~/store/app';
import { isParticleDrop } from '~/utils/particle-drop';

const store = useAppStore();

function onDrop(event: DragEvent) {
	const dropData = event.dataTransfer?.getData('data') ?? '';
	if (dropData !== '') {
		const data = JSON.parse(dropData) as unknown;
		if (isParticleDrop(data)) {
			const { source, particleId } = data.payload;
			if (source.type === 'grid') {
				store.unsetParticleGridCell({
					column: source.column,
					row: source.row,
				});
				store.particleDock.push(particleId);
			}
		}
	}
}
</script>

<template>
	<div
		class="column items-center pb-5 pt-3 bg-white border-t-2 border-gray-200 max-h-[50vh] overflow-y-auto"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<div
			class="row flex-wrap content-start z-1 justify-center"
			:class="{ 'mb-3': store.particleDock.length > 0 }"
		>
			<div v-for="particleId of store.particleDock" :key="particleId">
				<ParticleBox :particle-id="particleId" />
			</div>
		</div>

	</div>
</template>
