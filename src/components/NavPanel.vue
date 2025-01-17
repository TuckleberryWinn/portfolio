<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div>
		<NavToggle></NavToggle>
		<NavBar>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</NavBar>
	</div>
</template>

<style scoped>
	NavBar {
		display: flex;
		justify-content: space-around;
	}
	NavBar > a {
		font-size: 1.75rem;
		text-decoration: none;
		background-image: linear-gradient(120deg, #35d399 0%, #35d399 100%);
		background-repeat: no-repeat;
		background-size: 100% 0.25em;
		background-position: 0 85%;
		padding: 3px 7px;
	}
	NavBar > a:hover {
		animation-delay: 0.2s;
		transition: 0.25s;
		font-weight: bold;
		color: var(--pal-highlight-dark);
		background-size: 100% 100%;
		background-image: linear-gradient(
			120deg,
			var(--pal-highlight-light) 0%,
			var(--pal-highlight-light) 100%
		);
		background-position: 0 0;
		border-radius: 8px;
	}
</style>
