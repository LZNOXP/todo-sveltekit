<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import type { Todo } from '$lib/types/Todo';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	const dispatch = createEventDispatcher<{ onChange: { todo: Todo }; onDelete: { todo: Todo } }>();
	export let todos: Todo[];
	export let showDelete: boolean = false;
	function toggle(todo: Todo) {
		todo.done = !todo.done;
		dispatch('onChange', { todo });
		$todoStore = $todoStore;
		localStorage.setItem('todoItems', JSON.stringify($todoStore));
	}
	function onDelete(todo: Todo) {
		dispatch('onDelete', { todo });
	}
</script>

{#each todos as todo (todo.id)}
	<div
		animate:flip={{ duration: 100 }}
		in:fade|local={{ duration: 100 }}
		out:fade|local={{ duration: 100 }}
		class="flex flex-row justify-between items-stretch mt-4"
	>
		<div
			class="flex flex-1 flex-row justify-start items-center select-none cursor-pointer"
			on:click={() => toggle(todo)}
		>
			<input
				type="checkbox"
				class="transform scale-150 cursor-pointer"
				bind:checked={todo.done}
				on:click={() => {}}
			/>
			<div class="font-medium text-lg mx-3 break-all" class:line-through={todo.done}>
				{todo.text}
			</div>
		</div>
		{#if showDelete}
			<div class="hover:bg-gray-300" on:click={() => onDelete(todo)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="#000000"
					><path d="M0 0h24v24H0V0z" fill="none" /><path
						d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
					/></svg
				>
			</div>
		{/if}
	</div>
{/each}
