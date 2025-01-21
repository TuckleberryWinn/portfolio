<script setup lang="ts">
	import { ref, watch } from 'vue';
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
	const currentTag = ref('');
	const emit = defineEmits<{
		newFilter: [tag: string];
	}>();
	watch(currentTag, (newVal) => {
		emit('newFilter', newVal);
	});
</script>

<template>
	<div class="projectFilter">
		<div class="dropdown skill">
			<span class="header">Skill</span
			><span>
				<WorkItemTag
					v-for="tag in projectTags"
					:tag="tag"
					@click="currentTag = tag"
			/></span>
		</div>
		<div class="dropdown tech"><span class="header">Technology</span></div>
		<div>
			<WorkItemTag
				v-if="currentTag"
				:tag="currentTag"
				:show-delete="true"
				@delete="currentTag = ''"
			/>
		</div>
	</div>
</template>

<style scoped>
	.projectFilter {
		justify-content: space-around;
		margin: 2rem auto;
		min-width: 320px;
		max-width: 800px;
	}
	.dropdown .header {
		font-size: 1.25rem;
		color: #222034;
		border: 4px solid #222034;
		border-radius: 15px;
		padding: 0.7rem 1rem;
		background-color: #c37648;
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
