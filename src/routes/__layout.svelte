<script>
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import '../styles/tailwind-output.css';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="flex items-center flex-col h-screen  mb-10">
	<div class="flex items-center flex-col lg:w-[720px] sm:w-[608px] w-[400px] h-full">
		<Header {page} />
		<slot />
		<div class="font-bold text-sm h-10 text-gray-400 mt-52">
			created by <strong><a href="https://github.com/LZNOXP">LZNOXP</a></strong> -
			<a href="https://devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5">devChallenges.io</a>
		</div>
	</div>
</div>
