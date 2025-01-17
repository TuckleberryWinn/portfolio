<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import HeaderPanel from './components/HeaderPanel.vue';
	import FooterPanel from './components/FooterPanel.vue';
</script>

<template>
	<header>
		<HeaderPanel />
	</header>

	<RouterView />

	<footer>
		<FooterPanel />
	</footer>
</template>

<style scoped></style>
