<script setup lang="ts">
	import { ref, computed } from 'vue';
	import WorkItem from '../components/WorkItem.vue';
	import data from '../assets/data.json';
	import ProjectFilterPanel from '../components/ProjectFilterPanel.vue';
	console.log('what is data?', data);

	const currentTag = ref('');
	const filteredItems = computed(() => {
		let list = data.items;
		if (currentTag.value) {
			list = list.filter((item) => {
				return item.tags.includes(currentTag.value);
			});
		}
		return list;
	});
</script>

<template>
	<main>
		<ProjectFilterPanel @new-filter="currentTag = $event" />
		<div class="projectBucket">
			<WorkItem
				v-for="item in filteredItems"
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
