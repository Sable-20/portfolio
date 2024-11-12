<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Nav from "$lib/Nav.svelte";
	let { children } = $props();
	export const prerender = true;
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider>
	<ParaglideJS {i18n}>
		<Nav />
		{@render children()}
	</ParaglideJS>
</SvelteUIProvider>