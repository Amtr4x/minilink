<script lang="ts">
	import { enhance } from '$app/forms';
	import CopyLinkBtn from '../components/CopyLinkBtn.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="m-[auto] grid w-96 grid-rows-3 justify-center pt-8">
	<form class="row-end-2 w-96" method="POST" action="?/save" use:enhance>
		<legend class="text-center font-medium text-slate-800">Short your link</legend>
		<fieldset class="flex flex-col gap-1">
			<label for="url">Introduce the url:</label>
			<input class="rounded-md" type="text" name="url" id="url" required />
		</fieldset>
		<button
			class="m-[auto] mt-4 block rounded-md bg-blue-700 p-1 font-medium text-white shadow-md shadow-slate-400 duration-150 hover:scale-105 active:scale-95 active:shadow-none"
			>Short it!</button
		>
	</form>

	{#if form?.success}
		<CopyLinkBtn shortlink={form.shortenedUrl} />
	{/if}
</div>
