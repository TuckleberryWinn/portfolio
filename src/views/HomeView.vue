<script setup lang="ts">
	import WorkItem from '../components/WorkItem.vue';
	import data from '../assets/data.json';
	console.log('what is data?', data);
</script>

<template>
	<main>
		<div class="projectFilter">Filters go here</div>
		<div class="projectBucket">
			<WorkItem
				v-for="item in data.items"
				:key="item.id"
				:id="item.id"
				:name="item.name"
				:tags="item.tags"
			/>
		</div>
	</main>
</template>

<style scoped>
	.projectBucket {
		display: grid;
		grid-template-columns: minmax(240px, 60%);
		gap: 1.5rem;
		justify-content: center;
	}

	@media (min-width: 680px) {
		.projectBucket {
			max-width: 80%;
			margin-left: auto;
			margin-right: auto;
			grid-template-columns: minmax(240px, 400px) minmax(240px, 400px);
		}
	}
</style>
