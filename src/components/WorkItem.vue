<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	const props = defineProps<{
		id: string;
		name: string;
		tags: string[];
	}>();
</script>

<template>
	<RouterLink :to="`/detail/${props.id}`">
		<DisplayBlock>
			<PreviewImage> </PreviewImage>
			<h2>
				{{ props.name }}
			</h2>
			<Tag v-for="tags in props.tags">
				{{ props.tags[0] }}
			</Tag>
		</DisplayBlock>
	</RouterLink>
</template>

<style scoped>
	DisplayBlock {
		transition: all 0.33s ease-out;
		display: block;
		font-weight: bold;
		color: var(--pal-block-border);
		background-color: var(--pal-block-bg);
		width: 100%;
		border: 0.3rem solid var(--pal-block-border);
		border-radius: 1rem 1rem 0.5rem 0.5rem;
		overflow: hidden;
	}
	DisplayBlock:hover {
		transition: all 0.33s ease-out;
		color: var(--pal-highlight-dark);
		background-color: var(--pal-highlight-light);
		border-color: var(--pal-highlight-dark);
		position: relative;
		top: -5px;
	}
	PreviewImage {
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
	Tag {
		transition: all 0.2s ease-out;
		display: inline-block;
		color: var(--pal-block-border);
		border: 3px solid var(--pal-block-border);
		padding: 4px;
		margin: 5px;
		line-height: 170%;
		background-color: var(--pal-block-bg);
		border-radius: 12px;
	}
	Tag:hover {
		transition: all 0.2s ease-out;
		background-color: aliceblue;
	}
</style>
