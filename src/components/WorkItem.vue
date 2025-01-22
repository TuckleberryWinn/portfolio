<script lang="ts">
	export type WorkItemData = {
		id: string;
		title: string;
		thumbnail: string;
		desciption: string;
		tags: string[];
	};
</script>

<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	import WorkItemTag from './WorkItemTag.vue';
	const { item } = defineProps<{
		item: WorkItemData;
	}>();
</script>

<template>
	<RouterLink :to="`/detail/${item.id}`">
		<div class="displayBlock">
			<div
				class="previewImage"
				:style="{
					backgroundImage: `url(${item.thumbnail})`,
				}"
			>
				Goats
			</div>
			<h2>{{ item.title }}</h2>
			<WorkItemTag
				v-for="tag in item.tags"
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
		background-repeat: none;
		background-size: cover;
		background-position: center;
	}
	a {
		text-decoration: none;
		text-align: center;
	}
	h2 {
		line-height: 3rem;
	}
</style>
