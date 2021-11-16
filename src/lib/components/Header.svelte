<script lang="ts">
	import type { Page } from '@sveltejs/kit';
	import type { Readable } from 'svelte/store';

	export let page: Readable<Page<Record<string, string>>>;
</script>

<a href="/">
	<div class="title text-center">#todo</div>
</a>
<nav class="flex justify-around w-full">
	<a class="text-sm font-semibold  flex flex-col content-between" href="/all">
		<div class="text-center p-2 w-20">All</div>
		{#if $page.path === '/all'}
			<div class="h-1 bg-[#2F80ED] rounded-t-md" />
		{/if}
	</a>
	<a class="text-sm font-semibold" href="/">
		<div class="text-center p-2 w-20">Active</div>
		{#if $page.path === '/'}
			<div class="h-1 bg-[#2F80ED] rounded-t-md" />
		{/if}
	</a>
	<a class="text-sm font-semibold" href="/completed">
		<div class="text-center p-2 w-20">Completed</div>
		{#if $page.path === '/completed'}
			<div class="h-1 bg-[#2F80ED] rounded-t-md" />
		{/if}
	</a>
</nav>
<div class="border border-[#BDBDBD] w-full" />

<style>
	.title {
		font-family: Raleway;
		font-size: 36px;
		color: #333333;
		font-weight: bold;
		margin-bottom: 58px;
	}
</style>
