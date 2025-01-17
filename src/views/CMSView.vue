<script setup lang="ts"></script>

<template>
	<div>
		<form>
			<label for="projectTitle"
				>Project Title:
				<input
					type="text"
					id="projectTitle"
					name="projectTitle"
					placeholder="Project Title"
				/>
			</label>
			<label for="slugTitle"
				>Slug Title:
				<input
					type="text"
					id="slugTitle"
					name="slugTitle"
					placeholder="project-title"
				/>
			</label>
			<label for="coverImage">
				Cover Image
				<input
					type="file"
					name="coverImage"
					id="coverImage"
					value="Submit"
				/>
			</label>
			<input
				class="inline"
				type="reset"
				value="Reset"
			/>
			<input
				class="inline"
				type="submit"
				value="Submit"
			/>
		</form>
	</div>
</template>

<style scoped>
	form {
		margin: auto;
		width: 80%;
		max-width: 720px;
	}
	label {
		display: block;
		width: fit-content;
		line-height: 1.5rem;
		margin: 1rem;
	}
	input {
		display: block;
		background-color: var(--pal-block-bg);
		border: 3px solid var(--pal-block-border);
		border-radius: 4px;
		margin: 0 1rem;
		min-width: 6rem;
		font-size: 1rem;
	}
	input.inline {
		display: inline-block;
	}
	input:focus,
	input:hover {
		background-color: var(--pal-highlight-light);
		border-color: var(--pal-highlight-dark);
	}
</style>
