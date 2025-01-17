<script setup lang="ts">
	import NavPanel from '../components/NavPanel.vue';
</script>

<template>
	<div id="header">
		<h1>Tuckleberry Winn</h1>
		<NavPanel />
		<div class="border"></div>
	</div>
</template>

<style scoped>
	#header {
		background-color: var(--pal-header-bg);
		align-items: center;
		text-align: center;
	}
	h1 {
		padding: 1.75rem;
	}
	.border {
		background-image: linear-gradient(
			to bottom,
			var(--pal-header-bg) 0%,
			var(--pal-background) 80%
		);
		height: 1rem;
		opacity: 0.9;
	}
</style>
