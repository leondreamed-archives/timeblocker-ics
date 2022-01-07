<script setup lang="ts">
import { computed } from 'vue';
import type { ParticleId, ParticleType } from '~/types/particles';
import { getParticleInfo, getParticleNameHtml } from '~/utils/particles';

const props = defineProps<{ particleId: ParticleId }>();
const particleTypeToBubbleClass: Record<ParticleType, string> = {
	boson: 'bg-red-300',
	lepton: 'bg-green-300',
	quark: 'bg-purple-300',
};

const particleHtml = computed(() => getParticleNameHtml(props.particleId));
const particleInfo = computed(() => getParticleInfo(props.particleId));
</script>

<template>
	<div
		class="bg-blue-200 w-full  row center"
		:class="particleTypeToBubbleClass[particleInfo.type]"
	>
		<div>{{ particleInfo.name }}</div>
	</div>
</template>

<style scoped>
.particle-letter {
	font-family: 'Times New Roman', Times, serif;
}

.particle-letter :deep(sub) {
	font-size: 1.5rem;
}
</style>
