<script lang="ts">
	export let color: 'primary' | 'secondary';
</script>

{#if color === 'primary'}
	<button on:click class="bg-blue-500 hover:bg-blue-600 rounded-xl"><slot /></button>
{:else}
	<button on:click class="bg-red-500 hover:bg-red-600 rounded-xl"><slot /></button>
{/if}
