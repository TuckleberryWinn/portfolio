<script setup lang="ts">
	import { ref } from 'vue';
	import data from '../assets/data.json';
	const props = defineProps<{
		id: string;
	}>();
	const item = data.items.find((item) => item.id === props.id);
	const isLoading = ref(true);
	const content = ref('');
	const loadContent = async () => {
		if (!item) {
			throw new Error('No page item');
		}
		const response = await fetch(item?.description);
		const body = await response.text();
		content.value = body;
		isLoading.value = false;
	};
	loadContent();
</script>

<template>
	<div class="detail">
		<div v-if="!item">Invalid ID</div>
		<div v-if="isLoading">Loading Page...</div>
		<div v-else>
			<h1>{{ item?.title }}</h1>
			<div v-html="content"></div>
		</div>
	</div>
</template>

<style>
	audio {
		display: block;
		margin: 2rem auto;
		border: 0.3rem solid #35d399;
		border-radius: 2rem;
	}
	.detail {
		min-width: 320px;
		width: 80%;
		max-width: 800px;
		margin: auto;
		text-align: center;
	}
	.detail img {
		min-width: 300px;
		width: 100%;
		max-width: 750px;
		border: 0.3rem solid #35d399;
	}
	@media (min-width: 1024px) {
		.about {
			min-height: 78vh;
		}
	}
</style>
