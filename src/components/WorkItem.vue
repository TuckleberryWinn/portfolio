<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	import WorkItemTag from './WorkItemTag.vue';
	const props = defineProps<{
		id: string;
		name: string;
		tags: string[];
	}>();
</script>

<template>
	<RouterLink :to="`/detail/${props.id}`">
		<div class="displayBlock">
			<div class="previewImage"></div>
			<h2>
				{{ props.name }}
			</h2>
			<WorkItemTag
				v-for="tag in props.tags"
				:tag="tag"
			/>
		</div>
	</RouterLink>
</template>

<style scoped>
	.displayBlock {
		transition: all 0.33s ease;
		position: relative;
		transform: none;
		display: block;
		font-weight: bold;
		color: var(--pal-block-border);
		background-color: var(--pal-block-bg);
		width: 100%;
		border: 0.3rem solid var(--pal-block-border);
		border-radius: 1rem 1rem 0.5rem 0.5rem;
		overflow: hidden;
	}
	.displayBlock:hover {
		color: var(--pal-highlight-dark);
		background-color: var(--pal-highlight-light);
		border-color: var(--pal-highlight-dark);
		transform: translate(0, -8px);
	}
	.previewImage {
		display: block;
		width: 100%;
		padding-top: 100%;
		background-color: black;
	}
	a {
		text-decoration: none;
		text-align: center;
	}
	h2 {
		line-height: 3rem;
	}
</style>
