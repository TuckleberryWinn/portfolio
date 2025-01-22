<script setup lang="ts">
	import WorkItem from '../components/WorkItem.vue';
	import ProjectFilterPanel from '../components/ProjectFilterPanel.vue';
	import useTagManager from '@/composables/useTagManager';
	const { filteredItems } = useTagManager();
</script>

<template>
	<main>
		<ProjectFilterPanel />
		<div class="projectBucket">
			<WorkItem
				v-for="item in filteredItems"
				:key="item.id"
				:item="item"
			/>
		</div>
	</main>
</template>

<style scoped>
	.projectBucket {
		display: grid;
		grid-template-columns: minmax(240px, 50%);
		gap: 1.5rem;
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
		justify-content: center;
	}

	@media (min-width: 680px) {
		.projectBucket {
			grid-template-columns: minmax(240px, 340px) minmax(240px, 340px);
		}
	}
	@media (min-width: 1024px) {
		.projectBucket {
			grid-template-columns: minmax(240px, 340px) minmax(240px, 340px) minmax(240px, 340px);
		}
	}
</style>
