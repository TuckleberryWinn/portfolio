<script setup lang="ts">
	import { encode } from 'base64-arraybuffer';
	import { computed, ref, watch } from 'vue';
	import { QuillEditor } from '@vueup/vue-quill';
	import '@vueup/vue-quill/dist/vue-quill.snow.css';
	import CMSTag from '@/components/CMSTag.vue';

	const projectTags: Array<string> = [
		'Game Dev',
		'Web Dev',
		'2D',
		'3D',
		'Writing',
		'Audio',
		'Photoshop',
		'Illustrator',
		'Unity',
		'Blender',
	];

	const title = ref('');
	const id = ref('');
	const thumbnail = ref('');
	const thumbnailType = ref('');
	const thumbnailKey = ref(Date.now());
	const description = ref('');
	const status = ref('');
	const currentTag = ref('');
	const tags = ref<string[]>([]);
	const loading = ref(false);
	watch(title, (newVal, oldVal) => {
		id.value = newVal.toLocaleLowerCase().replace(/\W/g, '_');
	});
	watch(currentTag, (newVal) => {
		if (!newVal) {
			return;
		}
		currentTag.value = '';

		if (!tags.value.includes(newVal)) {
			tags.value.push(newVal);
		}
	});
	const handleFormReset = function () {
		title.value = '';
		id.value = '';
		thumbnail.value = '';
		thumbnailType.value = '';
		thumbnailKey.value = Date.now();
		description.value = '<p></p>';
		status.value = '';
		currentTag.value = '';
		tags.value = [];
	};
	const handleSubmit = async () => {
		status.value = 'Uploading to server...';
		const data = {
			title: title.value,
			id: id.value,
			thumbnail: thumbnail.value,
			thumbnailType: thumbnailType.value,
			description: description.value,
			tags: tags.value,
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
		return thumbnail.value && title.value && id.value;
	});
	const removeTag = (tag: string) => {
		tags.value = tags.value.filter((item) => {
			return item !== tag;
		});
	};
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
					v-model="id"
					placeholder="project-title"
				/>
			</label>
			<label>
				<span>Cover Image:</span>
				<input
					:key="thumbnailKey"
					type="file"
					@change="handleThumbnailChange"
					accept=".png,.jpg,.gif,.webp"
				/>
			</label>
			<label>
				<span>Project Description:</span>
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
			</label>
			<div class="tag-adder">
				<label class="tag-selector">
					<span>Select Tags:</span>
					<select
						class="tag-dropdown"
						v-model="currentTag"
					>
						<option value="">--Select Tag--</option>
						<option
							v-for="tag in projectTags"
							:value="tag"
						>
							{{ tag }}
						</option>
					</select>
				</label>
				<div class="tag-chips">
					<CMSTag
						v-for="tag in tags"
						:tag="tag"
						:show-delete="true"
						@delete="removeTag(tag)"
					/>
				</div>
			</div>
			<div>
				<code>{{ status }}</code>
			</div>
			<div class="control-buttons">
				<input
					class="inline-buttons"
					type="button"
					@click="handleFormReset"
					value="Reset"
				/>
				<input
					class="inline-buttons"
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
		line-height: 1.5rem;
		margin: 1rem 0;
	}
	input,
	select {
		display: block;
		color: var(--pal-block-border);
		background-color: var(--pal-block-bg);
		border: 3px solid var(--pal-block-border);
		border-radius: 4px;
		margin-left: 1rem;
		min-width: 6rem;
		font-size: 1rem;
		width: 250px;
	}
	input::file-selector-button {
		width: 95px;
	}
	.quill-editor {
		background-color: var(--pal-block-bg);
		border: 3px solid var(--pal-block-border);
		color: var(--pal-block-border);
		min-width: 280px;
		max-width: 800px;
	}
	.quill-editor:hover,
	.quill-editor:focus-within,
	.quill-editor:active {
		border-color: var(--pal-highlight-light);
	}
	.ql-editor h1,
	.ql-editor h2,
	.ql-editor p {
		color: var(--pal-block-border);
	}
	input:disabled {
		opacity: 0.5;
	}
	input.inline-buttons {
		display: inline-block;
		width: 40%;
		min-width: 120px;
		max-width: 200px;
		margin: 0;
	}
	.control-buttons {
		display: flex;
		justify-content: space-around;
		max-width: 600px;
		margin: auto;
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
	@media (min-width: 680px) {
		.tag-adder {
			display: grid;
			grid-template-columns: minmax(200px, 300px) minmax(125px, auto);
		}
	}
</style>
