<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Minilink</title>
	<meta name="description" content="A minimalistic url shortener" />
	<meta name="keywords" content="url-shortener urlshortener url shortner" />
	<meta name="author" content="Amtr4x" />
</svelte:head>

<h1 class="pt-4 text-center text-3xl font-bold">Minilink 🔗️</h1>
<p class="text-center text-slate-800">Convert any large link in a short link with easy!</p>

{@render children()}
