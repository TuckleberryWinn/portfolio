<script setup lang="ts">
	const props = defineProps<{
		tag: string;
	}>();
	const emit = defineEmits<{
		delete: [];
	}>();
</script>

<template>
	<span class="tag">
		<button
			type="button"
			@click="emit('delete')"
		>
			{{ props.tag }}
			<span class="deletePrompt"></span>
		</button>
	</span>
</template>

<style scoped>
	.tag {
		transition: all 0.2s ease-out;
		display: inline-block;
		border: 3px solid var(--pal-block-bg);
		overflow: hidden;
		margin: 0.3rem;
		border-radius: 12px;
		font-size: 1rem;
		line-height: 1.25rem;
	}
	.tag button {
		transition: 0.5s ease-out;
		color: var(--pal-block-bg);
		padding: 0.25rem 0.5rem;
		background-color: var(--pal-block-border);
		position: relative;
		transform: none;
	}
	.tag button .deletePrompt {
		transition: 0.4s ease-out;
		border-radius: 50%;
		background-color: #aa162000;
	}
	.tag:hover button .deletePrompt {
		border-radius: 50%;
		background-color: #c40c18;
		transform: translate(-3px, 0);
	}
	.tag:hover {
		color: #fbf5ef;
		transform: translate(0, -4px);
	}
	.deletePrompt {
		background-image: url(../assets/svg/CircleX.svg);
		display: inline-block;
		justify-content: center;
		margin-left: 0.5rem;
		margin-top: 0.15rem;
		height: 1rem;
		width: 1rem;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
