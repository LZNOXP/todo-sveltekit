<script lang="ts" context="module">
	export function load({ page }) {
		const { name } = page.params;
		console.log(name);
		return {
			props: { name }
		};
	}
</script>

<script lang="ts">
	export let name: string;
</script>

{name}
