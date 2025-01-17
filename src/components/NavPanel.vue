<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div>
		<label
			for="displayNav"
			id="displayLabel"
		>
			<NavToggle>///</NavToggle>
		</label>
		<input
			name="displayNav"
			id="displayNav"
			type="checkbox"
		/>
		<NavBar>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</NavBar>
	</div>
</template>

<style scoped>
	#displayLabel {
		display: block;
		width: fit-content;
		padding: 0 0.75rem 0.5rem;
	}
	NavToggle {
		display: block;
		width: 2.5rem;
		height: 2.5rem;
		background-color: black;
		border: 4px solid rgb(31, 6, 175);
		border-radius: 30%;
		overflow: hidden;
	}
	NavBar {
		display: none;
	}
	#displayNav {
		display: none;
	}
	@media (max-width: 680px) {
		#displayNav:checked ~ NavBar {
			display: block;
		}
		#displayNav:checked ~ NavBar > a {
			display: block;
			width: fit-content;
			margin-left: 1rem;
		}
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
	NavBar > a:focus,
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

	@media (min-width: 680px) {
		NavBar {
			display: flex;
			justify-content: space-around;
		}
		#displayLabel {
			display: none;
		}
	}
</style>
