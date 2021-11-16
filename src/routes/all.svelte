<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import { onMount } from 'svelte/internal';
	import TodoList from '$lib/components/TodoList.svelte';
	import InputForm from '$lib/components/InputForm.svelte';

	onMount(() => {
		const todoItems = JSON.parse(localStorage.getItem('todoItems'));
		$todoStore = todoItems ?? [];
	});
</script>

<InputForm />
<div class="w-full px-3">
	{#if $todoStore.length <= 0}
		<div class="text-center font-bold text-2xl mt-4">There's nothing todo!</div>
	{:else}
		<TodoList todos={$todoStore} />
	{/if}
</div>
