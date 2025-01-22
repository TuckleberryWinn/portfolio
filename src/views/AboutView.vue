<template>
	<div class="about">
		<h1>About this project:</h1>
		<p>The current scope of this project is to showcase a hand-rolled CRM with a Vue frontend.</p>
		<p>
			The home page will have a collection of various projects I've worked on with filters based on
			relevant skills or technologies.
		</p>
		<p>
			The
			<a
				href="#/cms/"
				target="_blank"
				>form page</a
			>
			allows you to submit a project summary to a
			<a
				href="https://github.com/TuckleberryWinn/portfolio/blob/main/api/server.js"
				target="_blank"
				>locally hosted server</a
			>
			that will process it into a
			<a
				href="https://github.com/TuckleberryWinn/portfolio/blob/main/src/assets/data.json"
				target="_blank"
				>directory file</a
			>
			while
			<a
				href="https://github.com/TuckleberryWinn/portfolio/tree/main/public"
				target="_blank"
				>categorizing images seperately</a
			>
			to allow this to scale into a mid-sized project without performance concerns.
		</p>
	</div>
</template>

<style scoped>
	h1 {
		padding-top: 2rem;
	}
	p {
		padding-top: 2rem;
		font-size: 1.1rem;
	}
	a {
		color: var(--pal-highlight-light);
	}
	a:hover,
	a:target {
		color: #f3032b;
		background-color: #171830;
	}
	.about {
		min-width: 300px;
		width: 70%;
		max-width: 800px;
		margin: auto;
	}
	@media (min-width: 1024px) {
		.about {
			min-height: 78vh;
		}
	}
</style>
