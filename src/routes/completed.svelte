<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import type { Todo } from '$lib/types/Todo';
	import Button from '$lib/shared/Button.svelte';
	import { onMount } from 'svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	let todos: Todo[] = [];
	$: todos = $todoStore.filter((todo) => todo.done);

	function onItemChange() {
		todos = $todoStore.filter((todo) => todo.done);
	}

	function deleteItem({ detail }: { detail: { todo: Todo } }) {
		const newTodos = $todoStore.filter((todo) => todo !== detail.todo);
		$todoStore = newTodos;
		console.log(newTodos);
		localStorage.setItem('todoItems', JSON.stringify($todoStore));
	}

	function deleteAll() {
		$todoStore = $todoStore.filter((val) => !val.done);
		localStorage.setItem('todoItems', JSON.stringify($todoStore));
	}
	onMount(() => {
		const todoItems = JSON.parse(localStorage.getItem('todoItems'));
		$todoStore = todoItems ?? [];
		todos = $todoStore.filter((todo) => todo.done);
		console.log('complete mounted');
	});
</script>

<div class="w-full px-3">
	{#if todos.length <= 0}
		<div class="text-center font-bold text-2xl mt-4">There's no completed todo!</div>
	{:else}
		<TodoList {todos} showDelete on:onChange={onItemChange} on:onDelete={deleteItem} />

		<div class="flex justify-end mt-4">
			<Button on:click={deleteAll} color="secondary"
				><div class="font-semibold text-sm text-white w-28 py-3">Delete All</div></Button
			>
		</div>
	{/if}
</div>
