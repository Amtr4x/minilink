<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		shortlink: string;
	}

	let { shortlink }: Props = $props();
	let visible = $state(true);

	onMount(() => {
		setTimeout(() => (visible = false), 5000);
	});
</script>

{#if visible}
	<button
		out:fade={{ duration: 300 }}
		class="mt-4 h-14 rounded-md bg-green-300 p-1 text-[14px]"
		onclick={() => navigator.clipboard.writeText(shortlink)}
	>
		The shortered url is: <span>{shortlink}</span>
	</button>
{/if}
