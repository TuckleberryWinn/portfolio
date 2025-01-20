<script setup lang="ts">
	const props = defineProps<{
		tag: string;
	}>();
</script>

<template>
	<div
		class="tag"
		:class="props.tag"
	>
		{{ props.tag }}
	</div>
</template>

<style scoped>
	.tag {
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
	.tag:hover {
		background-color: rgb(6, 36, 63);
	}
	.Unity {
		background-color: green;
	}
	.Game.Dev {
		background-color: yellow;
	}
</style>
