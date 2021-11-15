<script lang="ts">
	import TodoItem from '$lib/shared/TodoItem.svelte';
	import { todoStore } from '$lib/stores/todoStore';
	import { onMount } from 'svelte';
	import type { Todo } from '$lib/types/Todo';

	let todos: Todo[] = [];
	$: todos = $todoStore.filter((todo) => !todo.done);
	function onItemChange() {
		todos = $todoStore.filter((todo) => !todo.done);
	}
	onMount(() => {
		const todoItems = JSON.parse(localStorage.getItem('todoItems'));
		$todoStore = todoItems ?? [];
		todos = $todoStore.filter((todo) => todo.done);
		console.log('active mounted');
	});
</script>

<div class="w-full px-3">
	{#if todos.length <= 0}
		<div class="text-center font-bold text-2xl mt-4">There's no active todo!</div>
	{:else}
		{#each todos as todoItem}
			<TodoItem todo={todoItem} on:onChange={onItemChange} />
		{/each}
	{/if}
</div>
