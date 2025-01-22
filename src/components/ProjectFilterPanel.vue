<script setup lang="ts">
	import useTagManager from '@/composables/useTagManager';
	import WorkItemTag from './WorkItemTag.vue';
	const projectTags: Array<string> = [
		'Game Dev',
		'Web Dev',
		'2D',
		'3D',
		'Writing',
		'Audio',
		'Photoshop',
		'Illustrator',
		'Unity',
		'Blender',
	];
	const { currentTag } = useTagManager();
</script>

<template>
	<div class="projectFilter">
		<span>
			<WorkItemTag
				v-for="tag in projectTags"
				:tag="tag"
		/></span>
	</div>
</template>

<style scoped>
	.projectFilter {
		justify-content: space-around;
		margin: 2rem auto;
		min-width: 320px;
		max-width: 800px;
	}
	@media (min-width: 680px) {
		.dropdown .header {
			padding: 0.7rem 1.5rem;
		}
	}
	@media (min-width: 1024px) {
		.dropdown .header {
			padding: 0.7rem 1.75rem;
		}
	}
</style>
