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
	<div class="displayBlock">
		<RouterLink
			:to="`/detail/${item.id}`"
			class="boxHeight"
		>
			<div
				class="previewImage"
				:style="{
					backgroundImage: `url(${item.thumbnail})`,
				}"
			></div>
			<h2>{{ item.title }}</h2>
		</RouterLink>
		<div class="tags">
			<WorkItemTag
				v-for="tag in item.tags"
				:tag="tag"
			/>
		</div>
	</div>
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
		transform: translate(0, -6px);
	}
	.boxHeight {
		padding-bottom: 6rem;
		display: block;
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
	.tags {
		position: absolute;
		bottom: 0;
		height: 6.25rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}
</style>
