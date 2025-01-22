<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div>
		<label
			for="displayNav"
			class="navToggle"
		>
		</label>
		<input
			name="displayNav"
			id="displayNav"
			type="checkbox"
		/>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</div>
</template>

<style scoped>
	.navToggle {
		display: block;
		width: fit-content;
		padding: 0 1.15rem 2.25rem;
		transition: 0.3s ease;
		display: block;
		width: 2.5rem;
		height: 2.5rem;
		background-color: var(--pal-block-bg);
		border: 4px solid var(--pal-highlight-dark);
		border-radius: 30%;
		overflow: hidden;
		background-image: url(../assets/svg/menu-burger.svg);
		background-repeat: no-repeat;
		background-size: 85%;
		background-position: center;
	}
	.navToggle:hover {
		border-color: var(--pal-highlight-dark);
		background-color: var(--pal-highlight-light);
	}

	@media (max-width: 680px) {
		input:checked ~ nav {
			display: flex;
			flex-direction: column;
			width: 8rem;
			margin-left: 1rem;
		}
	}

	nav {
		display: none;
	}

	#displayNav {
		display: none;
	}

	nav > a {
		font-size: 1.75rem;
		text-decoration: none;
		background-image: linear-gradient(120deg, #35d399 0%, #35d399 100%);
		background-repeat: no-repeat;
		background-size: 100% 0.25em;
		background-position: 0 85%;
		padding: 3px 7px;
		margin-left: 0.5rem;
		margin-top: 1rem;
	}
	nav > a:focus,
	nav > a:hover {
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

	@media (min-width: 680px) {
		nav {
			display: flex;
			margin: auto;
			max-width: 600px;
			justify-content: space-around;
		}
		.navToggle {
			display: none;
		}
	}
</style>
