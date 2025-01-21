<script setup lang="ts">
	const props = defineProps<{
		tag: string;
		showDelete?: boolean;
	}>();
	const emit = defineEmits<{
		delete: [];
		click: [];
	}>();
</script>

<template>
	<span>
		<button
			class="tag"
			:class="props.tag"
			@click="emit('click')"
		>
			{{ props.tag }}
		</button>
		<button
			v-if="showDelete"
			type="button"
			@click="emit('delete')"
		>
			x
		</button>
	</span>
</template>

<style scoped>
	.tag {
		transition: all 0.2s ease-out;
		display: inline-block;
		color: var(--pal-highlight-dark);
		border: 3px solid var(--pal-highlight-dark);
		padding: 4px;
		margin: 5px;
		line-height: 170%;
		border-radius: 12px;
		font-size: 1rem;
	}
	.tag:hover {
		color: #fbf5ef;
	}
	.Unity:hover,
	.Blender:hover,
	.Photoshop:hover,
	.Illustrator:hover {
		background-color: #8b6d9c;
	}
	.Game.Dev:hover,
	.Web.Dev:hover,
	.\32 D:hover,
	.\33 D:hover {
		background-color: #494d7e;
	}
</style>
