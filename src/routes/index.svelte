<script lang="ts">
	import Button from '$lib/shared/Button.svelte';
	import TodoItem from '$lib/shared/TodoItem.svelte';
	import { todoStore } from '$lib/stores/todoStore';
	import { onMount } from 'svelte/internal';

	let value = '';
	let tbInput: HTMLInputElement;

	function addTodo() {
		tbInput.focus();
		if (!value.length) return;
		$todoStore = [{ text: value, done: false }, ...$todoStore];
		value = '';
		localStorage.setItem('todoItems', JSON.stringify($todoStore));
	}
	function onItemToggle() {}

	onMount(() => {
		tbInput.focus();

		const todoItems = JSON.parse(localStorage.getItem('todoItems'));
		$todoStore = todoItems ?? [];
	});
</script>

<form on:submit|preventDefault={addTodo} class="w-full pt-5 pb-2">
	<div class="h-14 flex flex-row">
		<input
			type="text"
			class="flex-1 w-full border rounded-xl border-[#BDBDBD] mr-6 box-border px-3 font-normal"
			placeholder="Task todo"
			bind:value
			bind:this={tbInput}
		/>
		<Button color="primary"><div class="font-semibold text-sm text-white w-28 ">Add</div></Button>
	</div>
</form>
<div class="w-full px-3">
	{#if $todoStore.length <= 0}
		<div class="text-center font-bold text-2xl mt-4">There's nothing todo!</div>
	{:else}
		{#each $todoStore as todoItem}
			<TodoItem todo={todoItem} on:onChange={onItemToggle} />
		{/each}
	{/if}
</div>
