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
		display: block;
		background-color: var(--pal-block-bg);
		width: 100%;
		border: 0.3rem solid var(--pal-block-border);
		border-radius: 1rem 1rem 0.5rem 0.5rem;
		overflow: hidden;
	}
	DisplayBlock:hover {
		transition: all 0.33s ease-out;
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
		display: inline-block;
		color: var(--pal-block-border);
		border: 1px solid var(--pal-block-border);
		padding: 2px;
		margin: 5px;
		line-height: 170%;
	}
</style>
