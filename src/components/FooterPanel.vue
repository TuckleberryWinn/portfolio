<script setup lang="ts"></script>

<template>
	<div id="footer">
		<div class="border"></div>
		<div class="social-tray"></div>
		<div class="copyright">© 2025 Tucker Bishop. All Rights Reserved.</div>
	</div>
</template>

<style scoped>
	#footer {
		background-color: var(--pal-header-bg);
		bottom: 0;
		width: 100%;
		text-align: center;
	}
	.border {
		background-image: linear-gradient(to top, var(--pal-header-bg) 0%, var(--pal-background) 90%);
		height: 1rem;
		opacity: 0.9;
	}
</style>
