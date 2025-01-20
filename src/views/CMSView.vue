<script setup lang="ts">
	import { encode } from 'base64-arraybuffer';
	import { computed, ref, watch } from 'vue';
	import { QuillEditor } from '@vueup/vue-quill';
	import '@vueup/vue-quill/dist/vue-quill.snow.css';
	const title = ref('');
	const slug = ref('');
	const thumbnail = ref('');
	const thumbnailType = ref('');
	const description = ref();
	const status = ref('');
	const loading = ref(false);
	watch(title, (newVal, oldVal) => {
		slug.value = newVal.toLocaleLowerCase().replace(/\W/g, '_');
	});
	const handleSubmit = async () => {
		status.value = 'Uploading to server...';
		const data = {
			title: title.value,
			destination: slug.value,
			slug: slug.value,
			thumbnail: thumbnail.value,
			thumbnailType: thumbnailType.value,
			description: description.value,
		};
		const responseObject = await fetch('/api/submit', {
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
			method: 'POST',
			mode: 'cors',
		});
		console.log('What is responseObject', responseObject);
		const responseData = await responseObject.json();
		console.log('What is responseData?', responseData);
		status.value = 'Uploaded successfully!';
		return responseData;
	};
	const handleThumbnailChange = async (changeEvent: Event) => {
		thumbnail.value = '';
		status.value = 'Processing image';
		const target = changeEvent.target as HTMLInputElement;
		const file = (target.files as FileList)[0] as File;
		thumbnailType.value = file.type;
		console.log('What is file?', file.type);
		const buffer = await file.arrayBuffer();
		//console.log('what is changeEvent?', changeEvent);
		//console.log('what is buffer?', buffer);
		thumbnail.value = encode(buffer);
		status.value = 'Image processed';
	};
	const isFormValid = computed(() => {
		return thumbnail.value && title.value && slug.value;
	});
</script>

<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<label>
				<span>Project Title:</span>
				<input
					type="text"
					v-model="title"
					placeholder="Project Title"
				/>
			</label>
			<label>
				<span>Slug Title:</span>
				<input
					type="text"
					v-model="slug"
					placeholder="project-title"
				/>
			</label>
			<label>
				<span>Cover Image:</span>
				<input
					type="file"
					@change="handleThumbnailChange"
					accept=".png,.jpg,.gif,.webp"
				/>
			</label>
			<div class="quill-editor">
				<QuillEditor
					theme="snow"
					v-model:content="description"
					:toolbar="[
						[{ header: [1, 2, false] }],
						['bold', 'italic', 'underline'],
						['image', 'code-block'],
					]"
					content-type="html"
				/>
			</div>
			<div>
				<code>{{ status }}</code>
			</div>
			<div>
				<input
					class="inline"
					type="reset"
					value="Reset"
				/>
				<input
					class="inline"
					type="submit"
					value="Submit"
					:disabled="!isFormValid || loading"
				/>
			</div>
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
		color: var(--pal-block-border);
		background-color: var(--pal-block-bg);
		border: 3px solid var(--pal-block-border);
		border-radius: 4px;
		margin: 0 1rem;
		min-width: 6rem;
		font-size: 1rem;
	}
	input:disabled {
		opacity: 0.5;
	}
	input.inline {
		display: inline-block;
	}
	input:focus,
	input:hover {
		background-color: var(--pal-highlight-light);
		border-color: var(--pal-highlight-dark);
		color: var(--pal-highlight-dark);
	}
	input::placeholder {
		color: var(--pal-block-border);
	}
	input:hover::placeholder,
	input:focus::placeholder {
		color: var(--pal-highlight-dark);
	}
</style>
