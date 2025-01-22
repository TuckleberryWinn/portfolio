<script setup lang="ts">
	import useTagManager from '@/composables/useTagManager';
	import { computed } from 'vue';
	const { currentTag } = useTagManager();
	const props = defineProps<{
		tag: string;
	}>();
	const isActiveTag = computed(() => {
		if (props.tag === currentTag.value) {
			return 'activeTag';
		}
	});
	const updateCurrentTag = function () {
		if (currentTag.value === props.tag) {
			currentTag.value = '';
		} else {
			currentTag.value = props.tag;
		}
	};
</script>

<template>
	<span>
		<button
			class="tag"
			:class="[props.tag, isActiveTag]"
			@click="updateCurrentTag"
		>
			{{ props.tag }}
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
		transition: 0.3s ease;
		color: var(--pal-block-bg);
		background-color: var(--pal-block-border);
		border-color: var(--pal-block-bg);
	}
	.tag.activeTag {
		color: var(--pal-highlight-dark);
		background-color: var(--pal-highlight-light);
	}
</style>
