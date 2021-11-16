<script lang="ts">
	import Button from '$lib/shared/Button.svelte';
	import { todoStore } from '$lib/stores/todoStore';
	import { nanoid } from 'nanoid';
	import { onMount } from 'svelte';

	let value = '';
	let tbInput: HTMLInputElement;

	function addTodo() {
		tbInput.focus();
		if (!value.length) return;
		$todoStore = [{ text: value, done: false, id: nanoid() }, ...$todoStore];
		value = '';
		localStorage.setItem('todoItems', JSON.stringify($todoStore));
	}

	onMount(() => {
		tbInput.focus();
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
